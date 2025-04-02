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
    "65X21yhqSa33gcTeCQg9j6ouKhbZudRk6RDo3HeCF49skkLi29cXGATW7CobNJhJ8Ac5Rxyvj919pdDZiat8QTYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWhPKMJvVMkDF1FvRod12eRhH4BmJsiciwUfhSJKxfyhraCezzjpcMcnsmEezBjrK7tLhScXmQh4rykkFhiRQSs",
  "key1": "1sPWwmJosCosq96NoLs1Lhc6GbWZm1aApjxqLqFEBWeuAgNbNgKYPnNYEezxovMDgAkj4YB7cAH9PoQzJTCnfPd",
  "key2": "5e1jpvpHgF3eKX6D3gMnnGAy23BDsYzqx4B938UJtX2Ur9bBcPVxkNL6fEtj6L7UQvdAvbLv4Z8L8DoD1icKyuiK",
  "key3": "4uj7EbS2JpGTzGrDF7quQSgsfW92KkbpoNf1qvJGGvXD7RQGHfr81QBWdFjqLmEyUCQTLFSnS8snfEtZgoBmKV6c",
  "key4": "4emUxbMdX4yvETzMKSxQrSyPo63SvpH9VsUsvid2iiFcMiLwJ26SMhnweg49TH7zexNKRTED543WFsRed5X2CJAX",
  "key5": "4aeKmRWSNfjJhXqiezjfM5tuSD49KFJk5iN9MdUvSSrsPpj5YcxiqHWcG4By9yYHsRUVcwmSCfHvK1sdfcRNBkro",
  "key6": "nff4RXcRzjRz5jRrBBw4jy2qLbQLvK5cT6RHENUTpUU5APNC14Z9mU81b2wjn3BBRKecfh6RBgRa5o3e8YJ8S3a",
  "key7": "4CxGEQEGC39g7Zuj1MDFNP7jhu6Gq6gk4XBpv147WsVLgrTTM2ThnPpe3NC9YPua8QoQvQRWmp2UYKCJgn3Q5kdz",
  "key8": "tSGPBaZzjDxCX3NeQFdAu7zoD2PQhYuGAutHqmEakoZnumEcx8zJaJGcXBr9NH6CoHVk17kgGNLnmEkMJLkKNW2",
  "key9": "2fjAMNtKnxTjP9U383SZ5TZqPcWKGfRGGqkLwJ3ohcdTEJDzJ9KQFF2Fi6pWnuUNnVVYjrLP1G3jCWxjt8Q62XLn",
  "key10": "3VxsKYV3PEikX2G852dsuvMt22Ge6hpZMLSnsXofqtW9n6UhsqbzhQ2UUeTTWgNVdumvAV7MADhFHi8cBaBb7DJw",
  "key11": "nEwGVeiczBxLi4b69uPEfM1y4z5EzCZXcRWAw5iGuiXXanNTz1M7WFz8NLERkGe1EersLsMjJYiNr5uRWdr3Xmi",
  "key12": "Drb4PHUmSj4fNVkzK7tiK7dzJ1j35gp8DXNen4FDEMNZkbWXg3RVZtsJQ49RS7QBPJx9cmuxuWeMScjLmTfmv1u",
  "key13": "3aHxKavWQUZershTw4haCK6DRHmsG9HaeqSiL5SRMRZsbLtCY8oAfHexNryRKdqaU5B5chLajR6ZEWR1LyCsq8Uy",
  "key14": "2fB2ZDUBJeh66CBPSBLYd2iHGa1YiC93v6VvaQVzrwoqsdhaFn7gwePbg24MyputLPmCn5gBekD4RoA4A3kdDaeG",
  "key15": "5Vph4VeNmWJ4dSNqVGKUrh2ZehQtZq3D3TA8JXibHYfNWhArZeku39y9T7U8XDXDm1GYSdWD9DoLamkvKLY3hFEP",
  "key16": "4LjsXP39fU4SFwjh9AGKFMY3MjNckYQk8nTp4KRy9g9KzP5MVRDaZHiKarJRVMWH88PPPL5weZL6KLBpwdMhFRCy",
  "key17": "5DeMCUdySdhqgWiSQXDP7nhRf8TfZfbNQLEe8Nztan3xu55z7s2y9Qm7BhxKqZZP8r6hkQ5uScBhPnJ1Jjaxpqi9",
  "key18": "4hswdcmXwZXWGDrEYreogHzkzv9XUqQYXRRt2PsvcHMCMaeseQx2XrDDyMSPvufitzSgXMKV613vaEwoCmsjsYY6",
  "key19": "5cTTMAakckQwwUMWq9iRbLt8NVrb4oQVNmQGCiLpshCSjaRZN7NVxoWQaYFKsLGv29Q7LMRh4XFaG9xWP8VYkX8y",
  "key20": "3FKCwrAfoFSRfs8ejQvXkS76624WvV4QLuEJiFh4HQMFAsMferQcnFbXHqfnq8UUhkvAJa9ukQZ8vTg7CTdF2a57",
  "key21": "5ckFgobtmdfqHghFuxf1miLbTBu9i5dr5vDEjXWq7pRtqQZ8XD6thuC8PXFfbiqJsbhjfXoKthgCvi7hzLvhzBAL",
  "key22": "38VgsuhCCG5WNnujZVC7eRRwT9wHqv9gLfHdZqwB2XpctdJzSUThnEtJPbRNicvCyPp7AvENhvHTXCyyA77Knkbj",
  "key23": "5suSHtGLcPpV5cWrubCCjEnLMv3ucD6KMGRDTVLLj2KAXk1aJNxyLVyjisQ4h3EzG4geAzJ2kKxq5e78Rf6gJFQg",
  "key24": "3HUcwfCRq1wkGhuEWbMZBTzybjvUxrSUjgtKhyBoZU9wu9sWWv2AD3x9ScAaYNhUTGoVUuiEE2RCUkXNTiqz7hV5"
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
