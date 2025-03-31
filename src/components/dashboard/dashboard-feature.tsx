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
    "wG6Rz3x1xFCCqAkk8fCNFWx8KQYMqe4tGRwmwSL9BFrcsH96SXCgjBWJXkSR19BzoAiV63he7tFZM1Zn3ic4ZeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cvEJXJNLKGNNZTUH36qpK4xFMsdsH4sQjxabVUQz6FX9n4tZncJDB5gQz2FfTvPXbF24hgf3XVnjR4xQv1FhLq7",
  "key1": "4ULUxK7zrgwuy36iSv5kovoXV2CmFkNwitSsumsUzpk5VWNz8fBouzeRBPv4m9Run8nyHKFcw7djNQWySFWts6gZ",
  "key2": "3RfJspebeMnfm4wrJkhkqNgbGybf1RYFLz5GQMmVZV3vmdRPJW7W6desi3YtCdrp4NVe9gyXPi6YQRow946LK3zX",
  "key3": "31khKPBEbcdn56B7LeZgVQoETgfwp4etbSRfykWf39eGBzEWJBbGXm33BJjjvcepz8sD6G6HsSoaE4DEdwYzGPiH",
  "key4": "LZGw8ZjrvxHqpdiyg5pQvyjYaPhzVT2BdSkoqZiTErbbPSWK7LtzTjugkv3yDTm2xd3TiNmZnLiNvR8PS7ESxbn",
  "key5": "y3K8beYjs4dnWKVBPuz7eWPiqLoiYDbnzB8T1RjvxPL7ELiBtk7SkoMSmt1HxbEia2dALzbS9jEu4oCp7ZrdLAb",
  "key6": "2n2yqUr3Mnw8QPpGVotkkiGMnPPHT1VQuU328xBRfmfVFTgiedD25kodwrvgyyYwHRAtxcXDg718t6Sm5VVFpAgD",
  "key7": "2nRu91717C1AorBP9r8uKpcwsKRH8279MCZzR7GYgsG9vcd8phCmKdhTc4CKoMpjojik4zcRNenNGgL1HdcHWDLg",
  "key8": "2w6saBkqppRtgKeSNk4XReZ4Y62qsrBz6QBgNtJ2FEbr5CRRaLCrGBSV8FqgLhUmSKjYqf5QnP5gJ431K1KN7Z2d",
  "key9": "hESZmmUr3UvnycoE1hyV8NmjxDCggjJH4QgSrZfCdxJqt6RcR7aRhAUMcQSgLTHAW9WFjNWoZQJjbuMCdXAZxvT",
  "key10": "Hr2SjNhY36v4WHAx9ajLCPX2qwXDvrj4KVijmexAdcA9Pa35QM9SN6BdUuRHVfoRXfoCBmoFLctiiys78xXbPGg",
  "key11": "2ekiccaRsNpWygxVYdMtrduAVcNhC1EzDKCFeTJFJG69wjg1DsmkeBVMu4RUmoSwb9GqDtK4hUgGVANMSh72vGJD",
  "key12": "pvLn3pCPB3EkrP9uKummykGB7gidh29r8AzeXxospwqu4v2TCdsvr92Mx4hMbn9PnMgtKUSW9cyjAYTkn4k5cgr",
  "key13": "5wWWvEfHD7DDUUyXFQu8k6U7uFmXvBy9v97ryj74fbyBAM9wUCqY8KMXYkdN4BBfz8yT4hy7h1QLz8wjgxsbiyUM",
  "key14": "2jz9pjH8V1yGq6VFe6DPiwqme4qob7ra3KoqhiSM3qxX9j1cqHjsBtvmo2XYWmZD8A7P879zapp9KVGEKFWo97mJ",
  "key15": "4XHD88oKgwKL1cMst68r32zAiA8r3PTQzmF247sbwBoCG9CEmMLRvCmYpRNqFaFTEMMwYbxpFHQ63RC9zsdaeck2",
  "key16": "5AG6FuAsEUtx1n48cJMKPBS2HYHDUdBJhyDFeF3o4SwvqrCKdd1ux1HPvkgG67mpVg7h7TuWB4gJUgeAcxDd3r62",
  "key17": "3MviQ8R3RgnwEXBceyBCKpgpNVQFU9CBX1gVhEYXBs3HP9MxocJyFegiKAy9Ph5E81dY6Ugq2KtAy91DxV1643Ny",
  "key18": "5jnVFum4t81AyGXo1ioTiTqGiKk18SoPRgLXCdqVnwwFjfeQkofeXNzE8YdjXnVFzNnfhAErWGqGc1MiHp21sGjL",
  "key19": "3DEnVCeBbJihyLvxz3NCRXqNctLQmJKYrYVXU7T8QySumLXzQXJRiUpUu7BrJJ1vZWCXuNSUs4WBZo56zwmdMy6M",
  "key20": "4nPD1ACf29VAH89jnzdcXMmcRy9aiZ4jvsKW5pdEA4dk7M2iBgUkjP2Jv82LZtMDvetFnGrARXWvj6KvpeT9ULm3",
  "key21": "287V36Djd98e8Uz2w5XP9f8YCnWtVvQHNPKFQdgJxox2W2e1McEUTFx3MoMGjjyQSk9b8kUxgihntgNKdmfWJEEG",
  "key22": "4H5AqPK2cWCLPY1H8VuiEUCYnn87PFco8iB4H4ueYy85mrrmffPN1W3aNj9C1TW9CM5MNmSVXP4qLorQ3BGVsmX6",
  "key23": "F7MiDt9WrsfnxMAWvZSTGz5GtgLjgVaYJXFLJMsL12dQd7HPcL5ngtdjeLJJScMBXeqhFdaB2hXrbFasGnZE6fJ",
  "key24": "464ncm2ovq2QzhvP1CjpQq86wHBuzKVqHSXTTCdhMerQxevCYMxLqcDXofpzp9o3Wf2s217z6zZdbCttjLZFGbWH",
  "key25": "Cqjn2TBcehnrbsrDRvHFw6V9wkhqjtPjjTKfehDHEPR9bf5zdr5vy6EsFWiQ3FFFwEPtMnA5QGHHSP2dt1cDWzq",
  "key26": "3hFT3JtBYMsGWxt5JoaCEYQ3XN6hZacxsBz7Po6UjeTmbCsFPAEUDCeLDAfHxMxFpzTqfJtjsNajKH6NooCdtDo2",
  "key27": "2EP9Z8czQUy7R7c7gDRFGoL48nKhTgNR9NzELDs4RMsCYc81KCiU63VgmFC2VH1vEN6MdtoVDXQBZe1Moo9gPSG2",
  "key28": "54dDQjfaPky9gVPZYG1dXrvKW6NimPD8t26TS5xEjF4SjxFa9paitR95qBrszFDkRtbMrkNFbSEiuMn7mpdFipV3"
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
