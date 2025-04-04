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
    "4CBDZztk4Qvm29DdHrNRqHoqvdj6iLz8F2mhvVa8cbnJy5eWqGdeLN7KikcZn4sMGPAPFtUo8C1MyGo7rh25cXVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g6yNfZfCFACGV3LsCNAREt7Mn7GP3nGswJmChbuWdzJTRjU5ovQHHjLi9nkUW5MDPJ6JMxivqy6PK9oZLNuVDLb",
  "key1": "4v1XVaGsBHXTYRa6mLFoDm1Bj4a759am1dQEyWjg1YTc1zMkm5bFmuK2Nfpy8NKf3s4hqMC4dcycHDAw4LFwQKdJ",
  "key2": "63p6fG4f52Ddz6ABAMxqcfbQfi6CNv6KgQiaEtKkDK6E7V48MHQVqUodmncEn6uZ6ktPBtu6Asco3uqR1C2H1eUE",
  "key3": "2kXuSmKAJkMpJa2VBqmEF8PWoxH1ESJSy5W1SJoLaqGW9C3JsDCCQf5XhWRFBgrp4btXgLEiXQvJVtEUBT8yMNLB",
  "key4": "3xqWdBJFLXeMApiK7HJ7ysDbdEzwUbRFgBLbH8tXw6XZ54Z2Lg5hPxPhCohx8T1zziPakNmkwXnDP893dA79gSsc",
  "key5": "35S34gbn5bmrBYMfaT9P6WGoe9Pbmpoo94WNt7PxMyMzZwuVzQbxzTn27hnpdtmhMv3ksgLjzvWqRB1duy2qJmP8",
  "key6": "5EnW2q2y9U75MriXaSfvmz78GbTesF1514MzA4FaDV2nCAFiDnkxWMeuthFnFuEgmikep7w84HLMfiR6mjrD4m9k",
  "key7": "3HVgNrjcUtnJ9CEHPykogEcS7ZxMTBA2orqaagjTuokpiuNpzEJNM5BEt8e21GrHJWmoAH7YfxQ9vdDVjQpBPRVf",
  "key8": "4dsNF4deYMWkhcG8R7TSeGMu6PXur26Xft7x6j1EhMwn13Wjtnf7Yk7EegyXh4RqEQFKcL2SQTyvEvXNjcYEzGsz",
  "key9": "5X4Q2ou7R6JGKqnHiyqY81RkxomZa4xGFKVJqdE33njRHotSfvugGDJ7NXzfvpzoVW81LxRxowAVZib2rbAdcFC5",
  "key10": "47jUzwvfZXNedyVTRtXsByVwZ9m4gNTR9ncY6ogrwnajZmbzqy4tjMuSGrG9ZBZ7Pfx6getUm1jDyvVWhYS77Fp2",
  "key11": "oopzgee254J8345vNBSHu9Rv6hfUToU72t7NDns7hU2V2sx2E9371dbSe2cbMwZtsZ2VsAteJm1KLU1e1NKi565",
  "key12": "5pCQ8rS7qLwPovAJABdzgpZWB81MFx2rYsvREthY5298dqwtUYTmy7UZ28y6w8VrP7btLgqbpPvTQ8uMyWfoe2ze",
  "key13": "cANpKBEG5qwRf72PDy21X86TT8jqx8AfiF6cWQ1KLj8xLYTvgQYDReLbi5EiHeA9UpNWvfL2xtqwK9werRNbb1T",
  "key14": "3qQdzEGiKPvqWbWr6RKbPL7kUYpVv9G9gwXtquvbckFakHHuLu633AVLj12BBZoyjBSPPJtG1LGz3uxWYx3zptwb",
  "key15": "4EbMZnR6KT66KYn5hUVN4zBX4otV29hePpzRr3kumJBEHfhj2b1jKpPnoLg7xavzoQQyAm2fnJbBRADcMv6bRJhW",
  "key16": "676mF7Zwidsj1xJ7KnSYzhLSvZjcEZyHavngihaFPesDfc2xwuutxJRgDgnWQUvzHQzCfzFwgnx7YPfb9bUUrUQW",
  "key17": "4j5EQ7kFw4oPBhPftqAGZ6vz2FZhceEipmQNZtbhpFHw3oxJbPWU8Jos2tSSEWN3RVGUgftrKKTmsJTds1PgG12o",
  "key18": "sMctePGrRsbHwFCeokHDj4UXMfeJaGRjpW3jeaStT3xtdLod4ZJMJBHngf9ds5ioN8s3FWA1Vz1xqyPbhVDBmAs",
  "key19": "3fJGjBnVYxJoLwgaFu29BpkM78qdr53XdtjdQYPFsQz3D4pqd7QEn6csD7iq5ahKfdjA8ehR7WHFAQ3NNTKw4uPA",
  "key20": "5GQnvfk9D6L4ULByorNxPF5cNHJ7j3s6RH8qGfQxU2dmcvR4ZYwJvTf81GwsEbHbC1vrgQV3oBn71SjCkP2bqS3s",
  "key21": "3vkvqKn3L7AtkuSomK468GhupEzK8VeDBgU6KXX6oRk41geds1jhSkHWPyDv5jU3u8z5QDd3FBpqacMtvQE5EffL",
  "key22": "4f4wPNLSsLxAdFGweZ2QWuzXCyaRUs8CmmYG2JMsA2zNLJdBJgqvFsmBeNABzrYyzcrNUH5PTAm5xbo8ojD21osQ",
  "key23": "436pzQWQNV5MUfwjbiEHacmQboTAwaeKq9kmWyuqZRBqUoEhrZXdq9z17AoK16BsRrjBrXmBrwWvEEbU5aF2VPwa",
  "key24": "2Xjdrx2HjHJACmxYZnZSh7NLUgFGV76d1pbb96sEw7XSLBddY982JjHbawaJZfxfEuyeXc5btYhkFvvHqGmGn9cx",
  "key25": "2m8KMS7W1oTzivyeQdAxa45QEFvQS634ctpbTDiA1Tt8HXbq8KNC7o5BvyLn3QihJ1CnjfVzTEqxm24ps3VuZsm3",
  "key26": "4sU79Rj7aFrNqk7xB2AMrtWUPEs3RpuqwJ2j481sddLCYHJHq8BmiHb1ekoqBoFBFdZLXKiFj5LacfcxJvuVUoqH",
  "key27": "SQt553JTZyEEPuBAZSxSS1f81S6Rq7g6bFUiTrD9TBQXGu9s3SBPKYfiAvqtEnmfhH7D8naZaAtppEpNMyhSWW2",
  "key28": "2TmhpmXp6e7arxRPpZc36AiWv866Qip7NBkitDbk1uCzJRfpisTutF8PiEquvhgy6pZhKzAB5QBBa81NNKCdyCf6",
  "key29": "5YAzxbtuMozRQHk6JPW5EfPedSbodACaq4RG8GtPXGcZdFb111pbTSbxjQoY1bPxLsnFdNAfuKp74DtZCGSEdXEa"
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
