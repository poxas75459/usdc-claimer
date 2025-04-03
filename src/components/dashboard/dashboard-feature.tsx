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
    "54oDTzhGWWYHeXhut8Chd5aFh82Fca4Ek3icq1gg4mRBmKqguMUGq2BVjkK2E1ytACyx4oNEvAeGAaN6ddndsxb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFmNLrxLgbQ4sU3LPBtC7U3UgZh3HrohNG2r3E55BXz8oJK4k18uCeittTC6RXVwuFb925kkLhsCZa1BzQ6zwEt",
  "key1": "44m8djaHW41eHNfj6yKGe6ysegJzcdDtAqSLhMTRKEDx3rrtHaEbeFbYwXhpRUkkdH45JE3Cnnqc339tFNGHGxGb",
  "key2": "3JKXieHvuGZdP85nAkpB64s9P67mUXDJriVGTSCrx3UCdGm1cVUytViC3xsTwM2XcmrT9vSepRVhY7Vqq9ByPC8i",
  "key3": "5i6T9KpDdRcgdRHSNU8RNtwLN3PZMxHrnDyvwoBZZhpYjYujEj3U1afvcH3QUtLtMazfoDTbhRDmEXwR91dZi8ec",
  "key4": "5SEhEhnyVbPtYgLLEwQgcnEthj4etoxss1TAvSHSJpe8BhkMLDWt8e4Ck771VzC4c1eRaNeCgzfnAguLUDvzMaRL",
  "key5": "5iYYBFwtu423HHy32D1PzKzANgMvNLuZvorNDNMgL3nWpHxu8nWxw3e39cMojDyZvzxjbAY3VXR4znEYLyXNryNi",
  "key6": "5RbMu21spXj9dG4Kr7JEgMjewdhEnJpMd8kL3Rr4AP5XzjZs21dxcPQFRNYKxSh8ZNxtp6KuzBveTHKT5CG7qRgp",
  "key7": "5gC555Kst64w9ZLdr6DM87iZMBR2WUcPq2udRuowXHQFW4TseTBLTtuWREnb3yZCeFpu3yrmNJEcBYWcwE4eMxaR",
  "key8": "46F1xE75RehMs3aqbGK3mio6ZTpwx67XVmZUSB9H5SrXaCLAFc7yaiaGxDo8MrNonDMj1fyFEY67HFuPCfSTDoYA",
  "key9": "4BQ67orTQLX9Axoo7HBn9igLkLfyEECHPKQWn614op1s6L5oR285H5FZXVQqAU2PqPiDvFSFTbM4iGSvzADgR4m5",
  "key10": "4mvfUjohmRtHWdfjP2ipN3FDE4DP1bZqnNfwoivpgJPNP7GmhWkzqtCCRzjrAvCfceXngthbSyeLwXKhsKa3ZyLf",
  "key11": "5uUYr9LkcAJPCkKRRYBDyQqaAX12zp2uTQbMwkXgLWGzs24JoFenVMbX9T3zMRvE4JaTthdxxPVBk6Kyy9Bw3rdh",
  "key12": "4qAThYvPUM52hDTS6oFoj2NmwKy3eKRMSYMjsezCANFdcWPP5FNsMVGd5t7dErDSV2EzrwzAS7Ak7pwC6NY2WabZ",
  "key13": "2w7JTMVF3n2DR6HW96Px8hpzHcKuBzsdnbt1PAFiS7NyQeUNqULvSUvfVTnmQYVMnPp4NUNmKSkTa8YoQsP6e81d",
  "key14": "KJKs8Jrho2Q88LhX81nAshoYJpgzaMFUy2wsuQHVprBya8uevbUTwmxDTDemjx4DmGsqZ99ci88GuuHCi4SQtob",
  "key15": "2kAQpxsU1tNAwFLY4ZozznuYs9mcFHXS1ZAk2nkeGEfasJpfYDPU6QFQki6FnbcrP8UwCXjdUR7rv1K2obV3z2h4",
  "key16": "42A8uUyjFr3oFQUFva18VB3FKV6TGRDqmEt7meWN96KgpQLF7TPM1GJ11ameUF9Cf7bxEX6tRXry7yst5dB6nyQq",
  "key17": "3tDNdgB6ALFFGstPfmDiEr5t5ejY58dZt7BzqnsQQgeamKRD5pbo5rnQKavzCbwx6LeegfmMJCU4mkpaKLyDunRR",
  "key18": "3yv4sBXxEk82fqx3egWERv6muW9GGAhL8V8e7cm9HEouQ8QVTJPSiYLqathTPRit4gE5iSfxQskZmZjxXqrE8JFT",
  "key19": "3CavstCgpyterbUkTVckuMGZ9eR3TQRDjoe5pgqoAVW8QSjjQwjTTY5qGZYoZ27VboBnTgD2BJgv2YTBWeESEbTu",
  "key20": "39Jys8r947uDhzAbPBkLPnT1NDq2K2zRyua9HdjYDTSjvtkwgVU36kpzeoziUQm91gF5pET5dSetG9u1iGRNmdjC",
  "key21": "4M6MAFPth5No4MRCGhDspwbp4YZhAJzfUf5wUUeL8AD94VDbQiLrRn3qciCCsFAH2h7jiq6iuCreeHixB9PYATcN",
  "key22": "Y7rnVZFDPf6b5J64ddTuqVkosVJuDdpEqLzykFwwjffJ42chHbWsb7nZuh8fD5nA4LK3DjQuABSHKwtVWJcWPwk",
  "key23": "Ux4esPLPinUV6XHX3v6UmjTfwMXM8FLMTgqUzViPkFfyQ6pDXzR8wWiSTzDACb9T1zifVh8TsxKXpnWQJNM5kXJ",
  "key24": "5J7BqZEbV3RJPCLW5N9PggvkvVz4fsFMcgjtJwRm3KJ65Au9eGrvyTMvPno1yYVxyzxxV3kPAGuJ6GarkHQrCThe",
  "key25": "UoFFXwFFDHtMbshLfU4Yn1YrzBPbSNHfTowBvFLZGkV1QWFZuhKS3Qxo3zYVimqxWUCggfH7JZHGmWntx9fDorc",
  "key26": "LxncfhpNrSnEjkv9XG2qEEsmwkLtct5YdjZQM7j2YoaBaLU7BJMVaExQ9giGmnnnDhZfVw67aZiqmAhtWUAY5oB",
  "key27": "BPR8hfNugFzP13JSXHVVQZ4uTJbYasnRNfyZvntef5NRT7q4dz6CPHLBYmBipQqCJpG8nhH8NgZMqizEcfgBUdZ",
  "key28": "aYNeVC7yVFhx8jVPiznzPsL3fpjKuKgn9HsqCSV9c7Ex1iGUFbgi6qynSyRtaXGPCeD1bHUksXf5rgs1mUELCEr",
  "key29": "5aCYbR8sbaAnkRjCiHnVpTqju4SRiNny9qc5dJHPbd6EXH8L7fbF17L12Lk7HzNDm62sgrS57uWWgwjqhb3DiYgN",
  "key30": "3gFHeGc2u1KQgXmu9aEG6TuMdsTsPyjXHHCoZ2C4GShnkzLQjsanz96YAXHe9MwsZZVYBNUfqsGgBKprURupooUg",
  "key31": "wY59YdyGzgKS63g4yQKQiYo4aSowhYWGZZ4xU326eJCTrDX28M9D7V1J2VPq4EFq3DSPwfdYc7w59sFJ476Zz4H",
  "key32": "5Xszp5NEUNXAX1GvycAk75UcirtKL5PU1HZu5MYx83eQqvgT1gLC32MzMQhB7zdewtbp8XsnyF18z7X78ta12upN",
  "key33": "4UPAZAkPrMUPdbqdjcK3eHZxcRhQqR8CsC1gHjwqpXbbuPEkQEyDx5TTheq4LorArsv3Wtko3JDy5enqBAhz2X4G",
  "key34": "4Cd3iQqKNNgbJySzgeQqgk3HEPkMWPVq5vBfDufUBGQxrDh8g1qyvA2jbWYtAoZ4CVXGDSKrKpzGUXfxCXkNC84i",
  "key35": "3zScBGf4pEvh2LZ53bApdRLdUMeWwtEPfBWHEhUGAfE6xDZd19sRPXeR16r7njqAiZAauk4abhEybaVqwe58ptob",
  "key36": "5FZUVuy2ifafaGwc6KQv41YHJRcv3xkHK9QEALSAUxXF8kYbdvGS3hAs1txu5wHowomWb1D3KT3DMNBeLen3qjRr"
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
