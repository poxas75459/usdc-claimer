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
    "xqxEArd9176oTDdRRCzuYEY9tPQvrnmeFg7nKqGeJuN2iNdwKsPEebNMSW7uHAba5EAtt6kJ7nhtjmuuSKjzWXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAF2ikE8fPLZTYAVeMsJB6UztLBW3wrekV1E46RoLSDtUbrUGPudXif23gdJWr47sEUyywEYAmizQd38kyAiBBm",
  "key1": "29Gy2SsnGWFUQRLkaiZ7wwdNvaHEfeCeZKUGZqiJGf9RNJUMZTsgNHf5RKKWTY5HiPUb87ycvUWBjteowrtiQbT7",
  "key2": "4DcFWhzZ3ZGvhps1VH4thVwGKUWjBfPzQV7q1eeDrwQxFBY8EhcUVbpuN7dn7efy4gV6EZRa8xNMjHUoC9sxxMAN",
  "key3": "2EkmZ18k3iKWRvtrAbxGF91J4HmHaBw34pR71bbTR7CxkTG4XCDPc3Lt7oXi7wQJLuYRqUinW325J5uLmz7ng2Wa",
  "key4": "4PXAF8NCc2VrrnmMmkWndBzUtTkn4XwZmS4EEZvvzH91wvsw3w8t46S2o3tJsdQ6h3SBrn26MYGofyBtNpzDuxg7",
  "key5": "3K9TGvJz5ucu9WeaQ1TMBLy2ev1fW9ksG6k4FXnEnFvX5s9VAaxHBLhoFH3smF2YNKVMAP4Vu9r3gheDAE9ggsuG",
  "key6": "2vc9Uf2oqMUR7LDML2HTPKxeuoUcS7ewm2eCrKH4nYjyGbjJ7JxqxbDkeGZwdXzeD36yhU2yr1MZybZuMZZEejK4",
  "key7": "rLAekmrU9AHXyJCNeqhogp5gnybmPyrBUkB8EmLfBadESFLjMGjE6s3Mm2ivNU3JVii3hz8pKv3ZXX1D8325q5k",
  "key8": "zxVtTuVxobku18C68tPzWnzkRWGqggSM5f6uPmx8c81LWPjrTmn1ABNRb1Ny8RNKdNKaU4bDrFUcEM3KF4Vobwb",
  "key9": "5fxYG5wyMKsaTW2ndn4enwLw8RHBfANtr3xdfHjFdAYr9A3Vosj9Ungfsme7YGB8MWCwG3NJN8y5Q2DJhe3aMkyZ",
  "key10": "2hfLDWdHbL3unU46GNWA9sqK9L9zoeVYgkb19y139TYj856hsVZEs19m3ZcmgyUP3ko6BSjymsP2ByKynoSQveAk",
  "key11": "39DjvQMsXFJqbnQcs1JPAMwqkYwyVrfmA9PYvorBsThbuKBsfVHX66WgKJu245jptrLLe3aoi1SaRiV9yrb3iNKV",
  "key12": "428u9ecLeQuRCveZAGRzRGK25pAykDuR6SCA3ELCrpVMF3D5N3pyJtbgDZpb8bq2zqJSE34XDKZkeHtp7FEDYu9S",
  "key13": "4Fuzh19Ddggmm9vqiDw98XQpKgFioQUSJxPADSsJ2EhQD93hxU582Vwo6wZ8nHGM6kenRgaDg8NC9MW2egcvKFkj",
  "key14": "5JQSFfQnipGqfQHuknL5z4cz2917kk1ESDeWa8ADK6KrkwaENjoV9zQvUUMJ1GL9MuvnhrdmbPg5rJJG1R4duBDY",
  "key15": "4aLS6WXnmod422oo9KsQbFwW6fjmNazyXZj53dFKcCXha8FcoQngybuWCxtJAFDdcZEedqcbAPCT22aUJWZ364K6",
  "key16": "nwd2u6avR4HhXTtH9Z16QBaEhF1rXGajkppg2ABskfrvamcmwSTqqob3dTvArPuG4xNkpXKfhAqtwojK6kbm3Yz",
  "key17": "5bH6P9s3fHPGFY94GGRqkJcTh4zFNT7KyLBw56aLuyNu12wcGfmfLw6ZC26DVqEZCkxYZPhnNpsPZDGEYXW3b8KY",
  "key18": "3kEzkMAdMreW6ssDZebiAjn2XuamnBwfZCfU7LjQEbXWM6xE7jW1WzWfsKnHztXA3ACSeHJAc1Yvit4hazEvdj85",
  "key19": "4agPFPzStCi16H7Gxj4ia239v3CnkY82FVK5MWpztgj64zy6iwepwu96RLvMVSZNcJBZeCiHaevHtTzsFHh7VX9o",
  "key20": "5eKhEYem1dGP4R5KeXVTZPug6DHcaNjvn1eD8fgooVkrffQneNLStXjUVvd9N8EMyzYiZiPxEdsWWB92UfboA2Fk",
  "key21": "zUxsgVhviLF8w4D6FF5nuEHo6TBr99QxPZTBer3pbnA9gaz4Dzhm8dixMxudQNELvX9LyDSk7Hep8nt9kAiyDuT",
  "key22": "47oxvzgw6pTxCXmKoseK3Bagx16RuBXHfSyS1gkN5CC4DX6FQQegbukaUdCPmmCgFrKcaouCkrNYAjuraxBBPPs5",
  "key23": "3psHqRid1ULoNnQeVFAZH1XRbzZdzfMbgow9B5xarf4iGVgymE22BoiNVfWT6WSW7iwwjnn8pgsZuJvcRxx8EpWo",
  "key24": "5MxS6zCXM4xRPJvXoUDkLKkmFp1yydKwkujH3tNxDdukAwq4oJBUa8Nu8m8W7Wygn1AtdEUAJNYGn3v7fibYfHrE",
  "key25": "5VT81nwYPF2ErDdNy1Zy9bh8bSrmbtc9HDzwGMq3rkWWRtmqPcFsCUbj9uNFJJujL72VjofgJ19h7fWQeufokWNw",
  "key26": "3kBf8o594T3kFKxzuot4HverD5Bw8ecFYrRdVcH1WbB1Gs4PwpryPKhAaEkinE6GwcRax9P8682dpgTqD31Wbb5x",
  "key27": "3FLYVzWhgjVU6zAuzNDfH9WYv2WWiJPaVWKwzivUFznpKJKfEETym9iFbmEFthujngQHtKRw3qj6KJyGn1u5VfTu"
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
