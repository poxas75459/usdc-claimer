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
    "5NxiYj75Vvsa6HHvtjbhuRFP1QEMstQczkS6n4YqCT2k3E89XG2TqBn29wUXYDsAMXZCf62gm1wWWpFi8doiPqd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55NpNG1akcA1B9HMg6g6QR11yKvSddoB8Hy8b521eNTdk49mjmSaxU4Hus16gwUyRDS9w9shHCb1EowbPSep3Q3N",
  "key1": "5FJGWMNqf215Cz2ELtxkPgpqZxuHhLH6EBpGPUbT77JUmucJwFBxKW1gZ2D7PiPEqfm77DbAcSck8Xz1GCkw4LzW",
  "key2": "5CAU9j3Mq86aoo54DsGH7SCGw5vFUDjki1VhzdAtmVYgaPqPvBHT29gQHPBj3o26Y2L5zc96Ttvu4Pg8mZ1aubTw",
  "key3": "55RjybvgBdLZbSJNHGbnUgyzMLSCGc7wyP4b12GbpszS3gmqaH7VHYtpBVzzQQ9WbyXK5mZrzLdttexqr5LQfWWP",
  "key4": "21mWei1GUnBAhabZGZzfmPrdwwPpRDUNCEqkk93rDPRBY66dZBBgJJYDwNLajuQNUTWHhzcfnPpbpHWmqMfWU9jX",
  "key5": "2WZFC1FU4YFruDS7KH6TaLUhdXkSYMttgse5garQpZKBAFnVrbA66C7biMHtRit6dQ9sUHWKurWWfnCY97pGy4ry",
  "key6": "2Zh31ESmJDPhLaAYN5jiwr8XVSwhukaBzr8FvgM81FQ2RyQ9KKsFKwFd2HYZByektPx3KXWdyjmDRgotzzFENKo2",
  "key7": "61acvY8k2hAMhPsFiakNYBxSwsS9yT6PS8vnfeiCVMSrjKunEd2iQVoGx1N4GoEr2JAfQu8Ucf41XxEAMoQbj876",
  "key8": "3CJZDRD5PSGfKvDEVW9EZeRLyhCrkKQTBy8q7Tnx9AGy5YR8NthS5bA5Cfnaq1hbEH6MQVRZjS9ZvXKFk1PfyNMy",
  "key9": "5rJY2WypFKziYLwxz9zqiXayJTeDhXJpNP6cNwwAU9Rs2TfCrCiUhXNwBrMvnatQtA9LKJbxUYGbNgT7Kc7fWTim",
  "key10": "3u7h8dGLdkFyfkX9Gr5rpCha4Anz9NdM8w1bBqSciavnb11zdKUMR5dK7eNAGTiw8HsmX5FTPs6v6b2cCdHN4QoJ",
  "key11": "4g7qzoXVLT6pw57BLwuxtdSsqLKUPpZUqfm4pCyuQ2dmL8A7NQjfmLvE4LUnF2AtFy4dhZ9Vep6ENfF1SA6cndX6",
  "key12": "2NLDUtL3Y1Gxpoww3nRBsLkKgdjkMg8TyCxktTuMqrJcH7ZcvmGx9ibH8WWwzbyWsZA7rdT6SzuXwrvZcAxqYNCJ",
  "key13": "sepTyXeuhFMkGBivW1DycHDwcBmpY7n4SAs6Z9g5Hg74EJT27gVAJKu23eK4swnmP21cgn8men32E99z7coGTZU",
  "key14": "4N1tLbh8GtiLGRfqjXmNTVKEHA7xzrumkfsj4QWqHDJvsJfbUwdq27AexiK1iyRSRAPJacD8g2skURcAarLXGWE2",
  "key15": "4h35zB4wDKTnKm1sxT8ymcLZ8dQbboXrBDfeT8uRPw1DSNUnTUT7wdUteXHEoBSbVaMGnEGBkTJznw8sPKSH455m",
  "key16": "TU2esEkz1sFdsA1vN21y1L4CSZ4WJxcJg8gsqYGiWBpDYfNWuK6NpSL5ghudosjDcZRvbWfSRiqRMs1mfPngqmV",
  "key17": "5jWnp5NYqXdWEkpv8GDVDYewwNbS4x3Kpvg6yt2y2qKG4Y3jueqQjKza8aBdzd6A3M47AEZAFNHmEhppmbq4hJHU",
  "key18": "41KvSFN3nbkY52kfcVF6Pdsw8hWrYcyvLa2Rs1RgwzfKb1ibW71nvvqpeAyHRu1gffJtXzL1pY2NkGYdAqzDq79M",
  "key19": "2xVzjwXtSdw3KchJWCDMJbyUEB36UksvtamzcaLirnbULj29hwamkatuy4u9nW5P9H9bDXndKaZedYJ6vWAwEX5q",
  "key20": "2rxS6ayzW5C7S7KooNSiUjrLie7EqACSnzNh2Bv9dAnJbKd27MRjCNCB3afhtNN8e3vDqVD1AmJUdaTL6SyYAZyN",
  "key21": "3QTWbSoJZfVbyR64Mcdm8z2YJk75Rizuen2yHPwJ6wDRErAGw2Ln1a8iQYQBN873iLSPMK52gR6pESRWXdcRzhzL",
  "key22": "4JdtvzWcAfakc25k1DZmy5EhMWpia8KoNRDE5kGjkeTP7Wm9bKYtPwBJsPaEeC4WTB4HrjtNXURg4gsyfz2ac7RN",
  "key23": "22Mn7Nqu8ApgM6pW6Zavbv1hKRRPWQU1SFMtsyMwiSqh64dmTvUsdHyzKpVzHTtnFcwShnE1v4RWTiznjWYRKTGa",
  "key24": "5yYsrzEfytJSjWKAvb3pYXPcqVpfwywhDPHAjf7fq1Q485xDRXmhUfrrPhrLcnoeTQk8nC7MEzGdimrg1yyL4vpz",
  "key25": "3nSVGur3SKE9TrGnGrYicoD6wijbKzSyufqJAG4nvbDPqPPS6V2BAw2sy5xH7e6kSUHJ3mNBRQVWNbfwFdSDvMgA",
  "key26": "daV4P3MKr2A7h71yLSVbJ8RSs1EFb5Xc4VRP1ainUQa9baSncqKDnTDnZXGiG3mvP5YpBp1PuG6krudMqy9cqxX",
  "key27": "36m6ozdfdFsU8nFUBzbu7VDuaobJxYs526qS7ZPxX654uyNbQLrftNLXDiJduJdp22Y3HXvGbJCLEY81TQuzzwm",
  "key28": "2VnZW3HR4Gpoz1VphgC7G57cLZz3qAp7PW3ZnPFuneWe1KdDVDrXHwnranGRs4z6RJh5W79oEXTkJVXReHUasUtx",
  "key29": "57uM5LJ371y9Dt11kRt6eADN8DBSn6woYJinB3ztELgkA1wL6Xa3KTSBHrTTeTrts3TrgoipJx8GffJ6v1L8rsiQ",
  "key30": "81tsM8ffSiCbBt1LH8HNFPutrhEjQv9HPc9rL99XhaaPkmqrXQkh1B7wQDXTpD85qfHrQGdA7gXSXX7zY8FHtxt",
  "key31": "5epd8JCmjpfaGL17NooCNr5XVTS1BkSYbs6RXtfFWUaY8Le9fXw3pvYTL2xCGDPBBh3aNYx1gQAHyjd7omn4PrmC",
  "key32": "33pvfo5BCBzcGEZ3p4CtLWBQ4j8tmhbswPBMh5g1fMFogeDsCpBbc4NF7wuszojWXNyDQTCHTghemKjyxSoEDcj5",
  "key33": "3kmmMUtEC1nELofrKEv9ozHQYDWiJHdqAwWV1wdgx4sigJitQgHivQDeFhUJuBo3DksED4LQ32fVeZuqtQB3N3AX",
  "key34": "2PULY5SJxiAor5QWNzRzL98JSnHZV32wvQ9ipwAVwKPnhUnNjB8wakLiV9AjvxxyZqQt51VwHm9m9bJDmJgXoqDs",
  "key35": "62vW4nBfBWewJ7xdCrsiS6TdjHGUaznUd9F9rjXm9P4tqRQA3bd93EHs9ttrCrFyFSg28jQwieji5ZVRpEEvNrCx",
  "key36": "4wb1BsLvKJ8H5vJcH5qJUj9vxzRWPQcoz4wQQeKf5PaChdPrvYqKAgNFAVoTLza4ziRJt2ydeWuoZcHifR72C3yY",
  "key37": "2TQb8UNd6VfRh9hFbwej7S8UvqAqzjX7wZTFSmPXiiFNj8NwNLwXkLsPtLQN9nBpoKdEV633h7SS57Qxu17ZpyeH",
  "key38": "4g84Je3JjJ8NXdREm1ngywJ6BW1RAnxzQMNkApr8qfkcMfRngXtCLcHspCGhvEQxiQH7wM61wu82xpHUDqrumoQg",
  "key39": "wndqy2x8q5LhHNkJNKV2DWJ7W2XAweVYMFeeCU746rTzjCRQTsZ9WWnKUBh12JJduRp1jkUKddhWJyaVxanEtPo",
  "key40": "45Hso3M14FVBSaVHHyn6QoeMCvqbZHkajccDSjbSW1Th9piRGPNwMWnDT2rmeUufi8oFYYTftRHwja9GeK5A5wjg",
  "key41": "31vp5Z8zJstdaKGrPjQA1fzkC9ydgwXamcRT8zDAe1gs9yQNkDkAkGcSDLn4eBwJyJGttB16hhuvkkFHhKszwd9t"
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
