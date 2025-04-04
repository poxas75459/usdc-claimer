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
    "57AYLVwj7nVY7UcqDjPdWVtHASme7QAd9xZA5ZQZBQguLsSy1MFgTaMcT78DWJugn4yjB1847sAiGKAG3tC7PUik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ng7ickwBS4wX1ZroFVWyv4CDgbnVuH5ohAHuBhjyvkZqzFHioh9L6RXutaHtket8TwiBp7GGoL3tbkWYENSHdZZ",
  "key1": "31maJXgFNf1VHfE12jw55NTAsPAYtXSKaA6WoW2vRbgNiE7T5kZv4obScYAR7jEGSHPZGPKa7V3LsGXkTDND4C7T",
  "key2": "3W1MzYxnSgSAi2UxXrqoXhREipMLfSCraN7mb3kgDVwiZHcU425hPdvJ52wL1BZe3vCre1YJTZUedwcebF45rz1v",
  "key3": "4E5DmZSWtzg2hxvNiWwbEkeLAr5Muiq6xhXtSdDzdQHeXcd2WuumVbM5uaGXQkJwoYHQ9LdA4Vn9Z9HVyj72SoPX",
  "key4": "5FpEV43CttTfLwc6tao5iAz4NudKWTeUKcHYcXV67XPPgha2h5geV21UpcSxVQT3a41CYpctFsNysPcbcdCNhoG",
  "key5": "3qgZgnG9YSQwyvrEnsD8EXnoR18oK44tqUxatVBYibNyHVbPvXbVbk3BRZpKj6cLSvDBxdAkUNFrcCqC9Qg28d7i",
  "key6": "4R6RFP4MY7ymz7HidAmYX2jb1xNjsZX1HiQoHmMqLpeuy6FZpCp2Kp2pvTx5WFq1rtp8rzpsaVkk3fy82PaWDSvQ",
  "key7": "24pS5g8DkXK3XucDtDHSoUBeeVuoaLeoVXebs4JcaA5nTqWYmRmHqQ5NHP48kbpgghvJtzsBpzj9VVMfEYHV1mMA",
  "key8": "3NnD3RKFFzze7Do1C6rGPdFwTeRRghJ9mkwoSr3ME6ESSsP1P86sMKsQ1oB3mvSAbjH33ELFRPcA3Dpei9Ahs75g",
  "key9": "4Vpg25Pcqm3s2pQ8kSJ9JEEtoQ1PonAjjT1xE2uBCX2PhRdBZnQaaoVoCXLD4waBxGuHcH4zZMkzH7thPE8ywAZx",
  "key10": "3arn9phVYPnLgPS8g9VUDwZzPM7K4uijeuRXDRpjvrVAUJEfokRGrbZfSjaruJ8syKxS98TVXUednoXrtrUDKkDi",
  "key11": "2soMxrHu3xZtii3kit5ckC5ZstHAdyKTm6SAHLM54oFVuh7R3yueD8zaEk3mFGTUj3kSsGRbhzeZxUpHXJmivosE",
  "key12": "Etmk5SEFsUyF7GpNMxYveo2a9k5W67pQryzVUVBwetgsA1S5LDygbUeoaWw19LGyC3DxyWLCa5bxR8VGwLxS88U",
  "key13": "4c1Jrrzm3QbkrbKpU7vvg1H4jLD7QyBLpC1CrD3nZDziC4pLyrTyskZxbFCtJrWAnuHrmAZoHgUVjpkU6Ka8ciMb",
  "key14": "2ccyGWFeFyPLZas8rC1Aq41izybXc7fDhMnmKGKiNkTC1xbJLCVXmkBWiYy4wXxxBC3CEq6VcKYhmSimMszooGav",
  "key15": "R8FZWJKkzQzAdhbN5ytfazhCQB3xSaq6BWDR2JkUS37Zhda2fwBrNUhyzFkYptTtmnBRpcp65nqFCEABFaJgoh7",
  "key16": "3ELT1jwuDeEbz5S7x9vP4QMUmtuSw8TFrTJkJUei5Atk9QVs9kiF9guUuiUEQMwTRQKbJAjHUP5gARm13B7H2Uqk",
  "key17": "2XBkdvM9EUrjBqQvJr4DzHrJhhdFKHXrKk49mhzHSioeUkqNeDHpmxWQtqfFt4ywr2JADktDTVPtJyhKsGGwjJhu",
  "key18": "41UToeK1ropmsExPsLBdPsiFSSwb5Z5sEzGmqCDi37vF1keyu8jzxQ1TKKsXboNm6ezNbdYPSfbVkomjJ6oPneyU",
  "key19": "2tssU8eJqaYHewo8KL3Zddp2hAjutL8kr6cYR6bi8YH197UWaSrJtXMd7gqsWoBLaG3NrUqXPgKw5sNKoNg8g7L6",
  "key20": "J9zoxhDvmJrojK2JHidYqpToayGFRwXzj1ukMWLFrLjdYYNymXen3nqmbsDMhwFu87J9WDffjg594LFqfbWjvJV",
  "key21": "63fCuaXirZrv6cCsQVpLfhS1m2HSqTZi9W28fywgRgmdTciUeaYmVhAzrSL7b4reBcpvrv5ao1mgzzZPVDfP1buf",
  "key22": "4sZRcxYVAq7S9o8AFxYYVb1dseJXZRuD2bSu9LRGMRj6HnCv9jGHB4DZ8p45VdMzSJLtee77jcompGr7oCTX8fZs",
  "key23": "4FHjxD7FFCnpw2A3naGQXSA2B5bN3uTAeKSzzf6i6S3mi8nuqB38c2CQLc4ksCMKau9BtDkqbFfVpikFeqHW3XUT",
  "key24": "4UmKPdMjE5Yf73zYkTQdujdq4uL6DfK7t8oLiE6snZ3ttZrdMP2STfqnSfBfhH3eKtD29hQ7YfCeJuSCGfhu44EH",
  "key25": "JaDPfaMqeCKCF8phEHCsfqMpyh63EhLSbqMy6Ut8EC7D8eaVUDrhrMrd4r2ZKqg4uBYXtSUBonP2Dn751hWoZ3m",
  "key26": "4PtZt8tGLXwtuTe5xXPgpQW2cptdDvC3MvEYqUHWF3JEJt6dL1fv87LcJfyqoHU61aArcfPa92VQfCSKX7a9p5jQ",
  "key27": "59XeBAypdx9Bz2adjBkqmjDPUzkPDEoZu4tMR2NeixtDo44jXw6pR8H4Mgsu2WtLRRaMX4etiJCzMkpbZw92mUCr",
  "key28": "2UFyne53bECZNxfMHdrL4CEExQtaDg6y3q6E2wULPHrHDfXbBysrJLs6wnpRHb7hwQqAMo4Ti8MGxTKVzki6a1Lg",
  "key29": "5Vw1tHfnRWRqFLgK1c68LYfVdtxa6eLqb3j3yqKtZXREsd4pCyM9pJ4T3K5hoiuMhVGZRF3KazrARLXiaks5UAbA"
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
