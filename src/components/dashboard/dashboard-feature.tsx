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
    "5EJEpN1ef4kRki4qNjSFssr1vJFB4NSAWPRTtRHAdizjKBx1hpQoUWoK4gqVB7ouX9fZeR4D5pXdevZtT6EE8TTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HM5D15epMkpfoBzFrREszqgagCi3jqJxeVDBn6sniUaPnknXLBrwL47ecNedFujdUeg94JbPEkYsSjUTokfUACH",
  "key1": "287pJffze7kuo2MH97VT3VCbJn2EQdv6t3fweY5tK9aZwmGtPp4GvmsTkr4Apoju5FCWg3N4z2GXtoHYHGWBPWyi",
  "key2": "4zsnnB8SG83ZH1teCyNRLc7zMaJCD6WnfFYhBYHBuHyFaTtej8Mhv4JFz4sghr6DksmdULrL3Lpm8WWFoGRmrMwk",
  "key3": "3JuerTTuHPcKsnCBiY5YG7AezeYM9hvtGca85VEpyKdsmPfNW6iRqWTFpZE5CFhRTwBQcsbT6BB4TfZYrgyQibr4",
  "key4": "5W784EZ5DeposjHadpBgnHvYxYxSqQKnL8kwtJiscB79Uh7bf9YneZZxKNtXeiSGRNi7YQZur9pfknoghFtWQ5n3",
  "key5": "4enLZWmnjoVgmELkPijpoEEhZ2fR2RdkFwuRiR8wkgpdoQqPpbb796aJpc95NTEPoRHNX2DXVXk36gWvZBq6xFET",
  "key6": "4wQeXPFQFYLGRxkuk2zKLb75NECA7YJgThXEs1bTBZZuPU4KGSBChH6hrNp8SpAG7CJ6qAjMCUGJkzdGv34EGuFu",
  "key7": "21yVpFE2S1KyGcVHEiQmGFJZayszsf9MnJp6Q5SqWktxqSpDvwQhot1B3KjdxHicZuTrMiA8FSaGQwgyZTMWxB6X",
  "key8": "6223zk22rcVkP7orkB9HiYUHhNSJDSSULMDX45SVgK1Zs4V1RDFoHMMw85Ty4uZhAnCLzVKiyu1gPAeR9BxHUbAm",
  "key9": "46SVaGaKJyRAdmYikRt6NKQcRizLqtaXUjZ7EXVc6SHTKrKfrQhJBKrGsgJLRZbMVURA5MUfvPMtH5uy7mcjkHKD",
  "key10": "83jyZFu5Rf7c3JsSqHveaJeerSkpMv8DZ3hkyo9ics33Xf3tA8uLznp2u3qmFrNpT4aZ6q5gLL39Z8HrtHtRtBL",
  "key11": "5DzCoqEfhSprEEoyMPrXKT3FivnQC6vR9cLAXw8VQ6Rdm2ZNZxdiv5Q85ed7EmqXVd3uSLZc4hcrYJFmYGuNpmXK",
  "key12": "5yu7qAwyPXQMrF3YwKaWqPeuZoyGv6ZgS2UmCLvqYffrMPDLbEa3uVKu5QuquG72uSwHN15id8MPqYtDxU4x7msf",
  "key13": "3CSMfBeFrLHTQKwvC8jpxyqxoVcDjjodWgSjVSVYCsB8QcTYDfjHugLRAWaZx2hj3VAisnvPusuvwTNGP4BiU9pM",
  "key14": "hrBzz9BEs88CHfpQrTApm8c2x2bxNoPrbMgD7F7o8AtyjdU8ASUEbcxdmFBpCCXvbR24qhVoxYjGLaSV2LA8FXb",
  "key15": "5b8w7wzhhXY4EnQZg1H3EzN2dHcZEPL6JydzjJtjxRYbq9H3xgykkMHBpTYFSaVg6zK9AeW9vbyc9jLTyJujvV9q",
  "key16": "5DqexP8aNZGJ9tf1udGb72gWMX72crNNhDQLLkZyhDKAEVAXRG5arDPgKGzcrWh3MgSAHiwfRou4BJwcqT2RNgSN",
  "key17": "5jUvbC7mD8uDEtFechR5r56Ai9V1WghVCrDR2UuB6L8ZVmyPhmhtWE5DMg5Uiaw1WiJsHsQWfHKDQCbLNR5uahAj",
  "key18": "3DHsmqQg2QVsnLBF1hs28HuZbiKsmBp3GHohUTeHQF1SkvpA8b3xLdCgw5xR13oaLtqJAtJPKPxVL2gNmjuGaTRK",
  "key19": "4facEtxCLEZJaQTVX92afB31k1FSeQq2v9cMNz46RL22CrEZucpVkGbQqNL7UwA17635o3CtPxymfiNpoWc34enL",
  "key20": "2hnayyohEKoMPdpef2emtqnECfBoXTkw3uSLpCAxGZ22eRLXwmzUy2CsxxKzgH2dtTXJJsJsaxAibt9Smbz4ADm3",
  "key21": "5cyvJqhT9Qo5XHyF5sh7TbEGeByfJWQFxBRE77D3srHJdyXtsP9Rj48iYerD6FbwsqrHBqrzHQVnS3fBZTdTcew7",
  "key22": "5bXpHphxNb481xCdqyAqQCZ9W1zPjabfbCecpt9S8kdrwxod6yFTnoU5scgFp3bA2gdTwoDWfdUqJZr4irSPgbyF",
  "key23": "6E1MdSETjDt5hQf9yJz39v3S8598ek24irHQWydegptn9kaUSvi4aWx3F9Fzxwsx4jn2xVSLqABxXtA3WijBMDm",
  "key24": "4bMYcCBWAHizJ5PMvhhR4tkzaByzeNJj7fbtteyMdUNUaMCeBFz4Xdgr9QqTerLCGp4pJyUrPiew1RWtWHpFq7os",
  "key25": "5SsqRHzMK3qyyxFZoGCMBaCPLnWMomcBUBReyNe5U4TabkYB9wmQ8HLvgvXUaPt7K1SjNwiP7gGSAjwjQYzLKh6B",
  "key26": "4Ssf35NrD54xVcqhe3NaHCFAv27gVcEUt1rLii6zCAnFAHuk1JswqL1zEtwgD8GTYr9wSGLrbs1mpuj5V1h7XTMB",
  "key27": "4yJCg8FasWQrRGLmB1b7bdT5ey7fYgFBjZrXd7Lr2eEsHCQGjXbp3pnTn9LTBP9r6293wtM5CVPdqzL7gQcaD6jy"
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
