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
    "2jEDGqkcGipN8TXGLT6oKa6wMEU8yBK2ivq6B4NzWJY2vHkMecPVvcxjxHXtmtk43bZbFhdat9gKoKJz8mUPnFtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CPYo6fncHmvMiqWNsFhDcyxW7M1vD815Ff3D39cDFZqS4cDig6XCyW26mB9o1dsG6PxMwBcWj8X6ow4p8Qnq9rv",
  "key1": "2ECP8BjFaQJfYzf7WWDCzK9nx2vVrQtvdCFuG1Mx52V2jncU4XNbyBKypD4LAsoAwDwbDn8WiggHiSTYsYm2uCvz",
  "key2": "4W6yV2AvYT1UTSuWugeoD2B3ZhTLnpVQAjpyBYHunVR57uvcaQjSJxLFkGMcmbwYYSoYvLx78UUkGyEV5p3Ljyiz",
  "key3": "5uqW6k7GTduJFeoQzEGzewvo621GPSxGNmZDyeaVomCvo4UKWBQK9wFod77tGVMd9p1sX2Uc1jVyLg6KsHu37ii9",
  "key4": "2GFQcT17gayneiAmrkrymdBsJXAwyk9j8jSbDjwp2YiEaGKTD4pRnjvQMb9KgP2edHUMfseu33YEyXx8SWZYitjD",
  "key5": "3Pu1g43Pjczrp4Dmo712kw19VBcB5gt6TxCapdjLYV717srL5xjkLfZG1kvKgzGMfH7ZLNrc2wUccJJg48ep5W8N",
  "key6": "5grBou6mRaAY94QzBL3eabgTCqUJWNgdXjxhuFWDfphez3ZW2CFMd57FUdcUuF8eqUKPtn2HYrZHQB1ojkbtPznD",
  "key7": "2jDegm2gyiB98xL8Lp1RGgAotfcqUY8i777Xw2YQGjudD6te8T8354EBFUKk5sDngKKR7fiSMMp7wRLD8uoA3sZA",
  "key8": "3vux7941o3MEV4Sgf8vkhFbckUCqp9FqpJfHvsg9ePCzdxS3ddRZbNy9iEBN1aKczurg5fVywipL7zqjF9qaonek",
  "key9": "48eLhFkLm1Ge1A1mTUfxpyDPjYmMddZDZfu6hG1BSEn2qzsX2z72x2ahzjbBtWQp75gMVyf3ceRAWXfYzNhpp2BM",
  "key10": "4Ki3kpbYqxsDBr2m8AJg5wBGQwGQFA1FLGkAKZX8vbFxc5KeZE4B89qaPcHzTdRzMYthjfdanudBKFjWog7YJ62y",
  "key11": "nXSAooXL1oKPBvUPMXFc3pnjpHr3ia3ePnwHp8szB7Si2v2KGGZKZrn3uw4xsA6dm1HZaLRGPsidM1TepQ38pSP",
  "key12": "54A2BH55kgKw7EyoJVKZQ7kP97GgvMTvrVcBNVELxozF7vp8JZkdCnrUoU6MgUYhTtbeM9b7nVHyhwRvrhaW7eSv",
  "key13": "3Qv9qkFfyzYvBLJftkUr3kLmqMTnTW4QB6wqVMKRuGSnrvcap4wdKabXrFnVX2aeqTC2dtgy8g6oNPkqwUFRcDGp",
  "key14": "2nfTqUzUBmyZmxsDoLa7SbkWCi6o6XJtisnECZM93H3UZfgSKcFWMhSxt3zQ8RAhdDEb4MueLLm9qLHdeVawbt8m",
  "key15": "7ppw3LUMWR2rffZnnqCYUcUQQUnBsmYQzCTTe28Ub6ct7o57124efrZ4se7EMDSgPmTgyKAFZwydasRBDANx9zq",
  "key16": "2XGtAe5wFsmaQH76AfSG5tyKrUm2YXPJXAJgdUxJjoAyFZ3TEUEq77Q2YEGhF1yZT1AT7yXCRiqZbTuhFCnfSNxh",
  "key17": "UC8DvwiS27cLwGp7j7nQEvCQc4TfePsNvQFksrHUKns2fxV5iVfAojDfRzqDLXrG4cMF3ccXbnwnKA5QDJ9Bnz2",
  "key18": "2BrzKPxeQDTdiZR3rdb4cfp2U8PiERrb5ekFw7Gnz3sviRYVTg36mPhttTVMqbjwetENYX6qw97E3rveY4fQAwYJ",
  "key19": "5xMKjDGxWgYXYmt7nbegjgsCYF91AHNjCfqTY5N3MtXGnDjZRYK78E8FPm1aHzyaK8u3qsKWcGWFCe6chKC78jN",
  "key20": "a1hP7APjAu1MKMdkjt32SCecC4GCBAPhgDFGXGuYbHXRXpqaFfG6jgSkSmgvN3q7KisMfMnLy6ypQbTd42Ap7LE",
  "key21": "4VfJWe2czpaJMXqCEEYSe6ozmJcFH52FvYfKmzMcAozvoWWifLGTYPRrdXiYGmwH5Kq4g7aHPcYXvDQj8ieZZeS4",
  "key22": "3XMNCi4mFCZ7ivBuFHMjMgCLob5ZaMmJUtZb2QR2E3pVGqqzbtMzQdJgoUeSnhLTDvo3XwH9yGm8KHaRkXTP8nV9",
  "key23": "e22t47P386286Q6XBabYJpNtbXCZpm5eWs69dWi57xrKuEEcmLhoqxRwnjo6RqBEe6pdn4GGwawNUBCYDJh4xPX",
  "key24": "26xXKPKckr3x3jsRmKbHxn8eLkcVxpaKUpYtxzH87QmrB8fgsQ4yKw1yBfoNoc4NMEGGwRzCkyH1cMfZh3GRPd73",
  "key25": "36EGTXwpoFvnBpQCZio5y2UmnyyjEVjxT8ozXwaRzvfZZc6TwTA6svW5MKe9sK28KoMCXdFwEPCkoDNkGVJPiJvY",
  "key26": "4hwDcmm7QEeg8TFehWYXQXKVSdiexmUMUTCHUD4KDAhSRkv8ghnky9XHbu5YCqLD5cqPacJAiR1Gh56HnF7R3eju",
  "key27": "5RWFTHeT7aHGzkbbmguvGGoL7c51Mkkih5UELUbz7njdhgedKg5jvMfN72kibti4phVpGP1kpMNy3q6jGJp5Db9T",
  "key28": "3FgP4jh87L7d4mkcZBo3oiX5DvVHD8CmicadiG3gBGkcXRoUWqMcKC41BtkEtMc1wFEPpTjo36eHYG8gkajrzMDN",
  "key29": "sXdQVeaqfM7LEfPNHSVXz1SntA3xUKXUSmHnifgJWM3m629Xqdd2oGBaLYprXhWu8jdrefc8yzZH6SDPN4DZe12",
  "key30": "421anaUx37j1Fau61WduBpCswEtgPreDQNGKMe5pKJKWBmw5YJCah9otEpD8iexerrbwSebiuxHtx8rfd53WCKDg",
  "key31": "4Zr1h7bTX2eHPmuvr4Qd3BdiJ7kEsBLcmSyeGVwkCEiXooBpK7WrLuewg4oAU6Pqm1obzVuGPAkD9etHF23WzVA2",
  "key32": "2xbXjU4Kt8WvbAGQ9tQHQrg3yHpifStEUeXASPKBgQC9vupx2WXVLDNahnu8WCsyTKDk8NtpQomBAKNf8FTKTQ7Q",
  "key33": "4F7LxCx3SEnDGL6cqh59q5Sfv4peU6euRQMZSiMb3CnbajTz9fhfMLN2J1deWUbzFDg4ojy3BazpxeV1xdzqwzpw",
  "key34": "4LMznh7p8qFVwpWkhGju1Rz1gGBBRXPo7r3Fhgw4pP3gXNECKxwBXxogmHxmFBm9tbVBT8akKsHk83PZQzUSyLNZ",
  "key35": "5zVfzSmfvG3oagU346zJzG3c6CqAhjrX7yR2aSvxw2QKJuT1rqHZWR8HLpH4iNiuSEDD37YouJijQLsEpM7hjt7X",
  "key36": "49Mj8kq6amACGMkvYonwGAhKThyWfLbcAapt7C7rN9tehk5d1N8Jq9Qmohvf9tYUeHs4Kwq9L9WoyzmERGP5xEwH",
  "key37": "5Um1Kk5hHLXN8FeJcYwGZUyQ4QU2fNzqgriaPCYHkPhkKeHd9FXArEhdcYcU8Kguk2hotoVR7gkEEiBASxxKmnpP"
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
