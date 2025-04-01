/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3ZHueob7mu87e6ykJqTkgcwxPLW7CJQJRQzYcCpkXwH2KPsEyq4ibUR29dkbUf9dZdsttxRQGgVCDVxSoeh5iPMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nd78bAecu8uEYcGCoaRboTAiknLak3yehbHxUVe7tht4anXTCVKtd7s96k5mLFKSi1YBu2kjApG4G8SMyP5h63B",
  "key1": "5whF1CcHSDcf6PZrLJMvFUBMqYKNnrz1P4Nckd4F3qMHb4DqcxEHC4BBGSYtj5D4hfCvMqhcXNcNWc82Eu4mLi6w",
  "key2": "5w8Zooyby7PuBaKFgz2pTfU7ZHSoapjVLMgQNxie2ZbGoK9iUZNJq8UPwRdSgrm9n1Rm4RQg1KgjTE9imYkw2hGy",
  "key3": "9fBiDFYwZ1fYbzPr2mVDxavFiYbWEfsJiQVk3EQ5F1AsYyKaYFR6ab8DAajB78F9zTbVNcqeF33nGX6CYPQeYBg",
  "key4": "3LD3sSgoEHbTLh9jBGvDDGoMEA26rvsufa7mpqujDJxMDA7oCrXkoysyogUGsEaHJzYejKnYM7m9rKvYT1v55Rgi",
  "key5": "75dfRDRi9a1BADBuvoGAHRJLgj6au6TUcggbu34ojHa4BAQL8Fn17qsrutPusqsocGq4K4LnNsm7Gc9rsiUQ4sJ",
  "key6": "3s5MPoQs4GQwDNXCzQGTvbiTfV6sonxDhSzvTrAw1bf9dXpJebgFtcK91kSv2zruTPqW4uEvH6KHTG6QxZiUh2eg",
  "key7": "2gMoMn6AUCyQE6H8cSFPoe8y63QRLodZcqxubz9VgFjxvAqWtsjkEp3gQN5qFKknqXFFgz1aWC3pH7aNuPsTszyr",
  "key8": "5xGoMhtHTK652dnQQpFXgqMb9KYK15Pdtg4WwKgxbDkh1rmbmaRA516beWCyqUciR8V2MwfW4Xabxypx5KiuxmrQ",
  "key9": "4U9fSXRjQ3JVAtCa62Bcb5Jc28ywGDzwzSjZeNXSo8piCAAnxFiH21vuCHDKTN7pbdCFmbBtLecFTB5XwBVTat75",
  "key10": "38Stmkey7iegP96ogzHpxohsb1sNVczq5QecJFipfyyeHPbVJUSpkYh2ya9FWByWtNyT16gGVAF8RHde2gEZ5QbJ",
  "key11": "4R2eMF6ZvBfyEbLvWVsF4Sg3zFNRbxmnPBN6Q6Xvg1V7NZTe9yenQUV2rgy2Q4PN6Upt8dubvcsKRsDkRKwaDQW1",
  "key12": "tdvWJoXFfUSiEQi8ofUUgD3ir7Eqzs9vPDDdxsvz8adWpQbd6XyCgKeEGBgCWXohdLFAc3x95xgSQoPdMBicp9c",
  "key13": "4u2Ung52Jqq7oL8nK7WVHjCCBm7gSrm7zPQurGDRKjfdhvBesGkynVNvDSYFFai5LGi2VZoVZNWz4VUCBerG2HrG",
  "key14": "2efdpfpQHdtVTAF116BDoXbnFTZfdPWePXqqE5Z6Mcyv2FeuP9n9mcCZteMQnSTZAm2rTgsWiZFgLTBC5miFiuja",
  "key15": "5JwBdW5qPu2mrN9qWYP4sQhXqYDwzPqhSocLozq5dte3q9p4kLNCGAKjZnpmcbDf5942XoGo6n3RLqb5b7cM1MTK",
  "key16": "384bi7hvegZHKQVJfKbdfCKuVdMgsSSunvvgLhqSwGjwg2oForvHWSWCqksjNvoctDJbbuSVZCgfSGrtTJbCLVJg",
  "key17": "5qA4VaKzLQLGDAsn2ZXM75uFgknDtxZgff3SM37eP7ptTCXU436wmgETnWpWnYu98NcKvLtFpgY6kQtY1FUFUN41",
  "key18": "3nMGDaWtKs74MFXtgHSMhKnTVfiNy3D6jdA24K6syVQG6yLfsR2VENiobCPBHp1N7yguKE6gBGGCFqd5MVHQ58rL",
  "key19": "RF8FUitxzwxvRuvX9bHWuynxP6r6KsY1WNJ6DFmWKA6jRJrK9Ly2zDq5a43y18RQkoF5GezCFVBcHksKJNEAeS4",
  "key20": "GSviKb4ngLHpMS2MZGNxBkZdqgSRZ3UcF76QPugAztUMt9TjCWGU7ULZRwkBspYU7197J4aBkTkijueJ9SJeKEA",
  "key21": "1J94vQobdWbVoWjpwqjxLsYFZVzfAbeyaj3z7gc7G8A7ftxFME7KDrnt5ZiU5AiRKkLTxRbgJxvgJksMmn8Y7Te",
  "key22": "2BSLhtuB2kgDYBzXSyYpGbQuir6Bo2YUXrmsXC8pJ5VhV6mu8J5GZ5YrGD8MJGM6LsuQtAcEGFFi7ZvtEF3k6R2U",
  "key23": "2X1NGqKjYKscVNwGY4WHkzzKYLED5UcQ3NA57Td143bP1We5NCtMVpgLJDV9Nmt2inmApJFTrmVkDkDEs5K5riDZ",
  "key24": "5U4WzTDgiwE9YJoZVbzvx43MSjryL8m1unFSaAzLRB2pSWSYTDmYPUetGNJAyfYDgbYij8vXn53SBqXzqXmepQhL",
  "key25": "3NW4zJ9QU89EKaScMLofSrW4KB9aowGBZsAmoGNqcKfFrCqu3XpkXrLxbqe7YhY6aWpnaLmm3XqpxvuqbGYEmTjP",
  "key26": "ET24vAUHUyaLE75UvQELU6sL6HRcB4JW7FCBLv75pSHDPUcC3SdAuSu9TWE4XYTdEmQnS3eGFVBfGjcWnfMiDwQ",
  "key27": "52KRJjHp8VGD24eDNmQsk22ZJSa8Up3pU7So87zqPwLbJKqek7r15X5Jdh8gPwMqGhfhEGyZv2L7Fc5vvqyxFYKf",
  "key28": "5vBoMmkVnDxzsT21HheckE1EErZ3iygJvCESEAsAcVkBdtzKaRr6MCd87Fz8W4T8e2TVNh4sfHru9QvhTAPVPK1K",
  "key29": "4BQNey4CuVFfkNbjSmXMRMiz8uDGzUmtcEcN3A8QmfgMiM3h54MpYGDDGoGimrNJGA5B1ZVP6rBHLg1zuVjTcZEE",
  "key30": "2PYHijxPbh3CAEfxYAaxcA5bU6ioS7gJf9ztggKUfrwbDPBNBkkpJsvUFfvZQJu3V1VR5UcdTzNkN6VYb5DgnMhE",
  "key31": "2XxYwGAuFYS4LeXZ6Fvqc3vGm365dELiBCrvK9zG81L5MFqFLHX69hLTJgjX9Qi5hTkBqSheYd3jbaib2vniJzAT",
  "key32": "5HqK9ihGBK2SZR4LdUvb1cSw6nRe9fRmkekDKz5RAf2wUAmDwGpqdRUfEgexCRJqSgkXTCnEvnnKu5tVpPr9KX42",
  "key33": "E56AXThiUgFQHVFgve35AhTGxGZ7r8oTPqSub3NSgRX3LuyEmbJEa1Wgo9wb58ufjBZVi2eH6huA8n8bg2s6hLV",
  "key34": "5SMu22B4hjALq8HCnd5dceRctBnCMvWw4NKxw1uM2rkt91a4CF7Rem79YXG7KR9AvGpbBZCHPvcmmibhEcWFY6RD",
  "key35": "2HJcuYeqVKqMBY7gcyHCh4D3iPr4tuAqkPJrtCMPnp5qiFth6pkcSYmqiaEuX6Lp7kUESwCX8zht4VvXe1VFqm9E",
  "key36": "47qWxGPicdiP7sbfijT468xtYrFAnLZwwewFXLYRqZ28CY6W67qi3S47U7jTzRuUeSRKKvW4BvhRsPLXypASCEZy",
  "key37": "4F3kGwPTezfE6RuXgRLWuncFj7GEoU8EjQZdRZeoAdd9pJndwLXwCRHxb3C3vRn9adWu5tS2C578pXvhogYdjQER"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
