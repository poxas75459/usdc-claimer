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
    "3XiSbMPjJk5iQCDuEb1ZkVxD5noZ3MNhmL1XHQXF9wxjARFkx4oN4zq1bMivtK4MuHtU1m5C9AXSYUMHjsGJwi6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oy9iqWQvVMrBmD6jDiSWZMxVU2b6yvwigeCpMtvA4t7CSXoX4jcg6tHDFkJMXsisAVuYWSEAeEreBpK2gvt46uD",
  "key1": "3wEfmmhP9mpbVuRLBHTHg8rHg7dFX2z9x4vCnYyEB3TWNuzU3VNFUNv6pepxqkUxA4YqvpyP2ex8JuWCjHbmZAYS",
  "key2": "MyUNct4xGhvkds7wqAdRSjawvJURKqQzv69hz93vYJcry4yYUqQVdYKgzKW8iJvE9z8RwrfgoYK3oW3tHtbxCjM",
  "key3": "57FNaZXvKStNGgxHdK8q2cBFSmyLYWFVznF2AuqC2vRjCMyHPXe9MTMqJqD93QmpnwnpgozLBAhY88UF3Nq4Ay9F",
  "key4": "XVp5HFRmvVBV7nd1utPMbVWFWdc4ibtWotZkCqx1WCxZ9LLtQtrYANFypxQxqtAdwHfZ1QoBKNBSoqNL4YWHPxk",
  "key5": "4yVE63xc5d38WPoMvPXvYX8YdPL5SjMDLgKpwPgbkEKYQ2N9B3JaNhD9triEc6qZBgFhhFTrNNSdYJP33WL72qAn",
  "key6": "3foLjZyLLvq5CAi6aHnmjffxphhpcxtzAizv9XyNCR3of2CbGQts5m1o6QRA8Hp1D6tUbzApsJLBh4fPRP1MSnPP",
  "key7": "3r2nQjyDsACKYZXaUWZpu29UR7jXACFo578fj8b89K8P4Lx7utQnkCsdf8J5jnCcXw4VwFw2HGfiP1ovUSsZnMT4",
  "key8": "5fajgrnDscJwUccb5c4PHHbdA98mtPW7YDR5iPTgt5SMF5qgsmiJpm6Riei5uH1g4M2ffK2bh1VnAnromLXLWhtV",
  "key9": "5AwcRcZkCeY3kXC2rQeWGmRoktcKSGNjnqaJvVc5QbdVRZLNbLm56pAU1kqTV2RaYoJTsLsybeKthckAEjbh6F6F",
  "key10": "2UarZ8PujMP5dNciXApX3oR8NLuBnKqNN4XoYJwcxf9f4qwiiE94EGwXrJA8r8i5UvxB5Qg8LQTS9kLF1GU6qYpx",
  "key11": "4C3YWDPhUVrrgh4K3AsnrtibhdM161jB6EkvNAf6d48NZAZdKQBXmyMV6GAEnCEKDAJaByEjBHMSRZRpurnu88KD",
  "key12": "2uYisFWeGKcVdTZT999Kek2fMECkGVpg5r4aYHS4FjvyQB1rXU9jnDeV1twtoYDGbNtq9MuKCZHwYpiUYZt3xG7R",
  "key13": "4XYcntSssQ3ykvtJrjnLa3L7moNmxteg5bukjb4VEs9wyVzar8xoQ8LfDvcvLsGfMqDeWvXYAcYFPqsL83M1B2Mq",
  "key14": "2B2BX2fex4YMHN96HQvMmLYPRCvH5rSbW4rwy1ZAJgcLtbAgNKoaSWBzqTZVehStsFGUqsVsk6zcWYQeoiBVSAPA",
  "key15": "5yNxK1chkeK446XAwQJ5ey5WMgAyaa3Xf95Tayyhdcxc9nHC4aDkjpbFwBvJ5NiNayCFc3GGDmXK4h1KRu28YdjB",
  "key16": "eNBCBw7G6Vu5AjUDbXFzjPgrLVSgupXYGMpqRpdMDtwpRk6kXB48KDsj4t46xbcDmn1ntbbtxPmDqPdGvRFk96A",
  "key17": "4TG4zhuVkSvLAVYgo3FL13GoCvKPPHa9MGTjQXUbiR2bfZkt3KJkbKMa4L1tFUVi1jsmHEa7nJ5CRCNWaFJGofrU",
  "key18": "39UDS3L2KDqXbYQivsmLizHkwbXQ7cxXY3XAeFrtpGF5d7BCpo3WEL6LJzC5NCDcPAQwcpxPKDm6P1aU15irFbBD",
  "key19": "hUFnz8kBpXnDmGBuxmvka94PC1FsndyHmKuYasDc2ii4bnt3Gy3C1xS6HPPp8CTnWxNE32DFeRRyNfNrNYiwZUM",
  "key20": "2aSTVqvXpQcZ9jK7hvMboaqzbL7fzSyofBPiX5RBSoybF4jF8Aaa1ByA56i4CMNcZaq41XdwZ2EbhUzoqXsW83Vd",
  "key21": "39wbFcbF5M3yCtqx4mhwWR7tPGbkqKxZrYy7VDDYfyh7tKLwLtgbsMtA9cEaGMzgf2ntJygvbjBfxkXrg8eoJctP",
  "key22": "3CTF12vUQuEjficiWviZkbh4LopFeQsXPa1CHYHZ5UmthqAHLi1DmRc2cDg224ZZ1B5FqRHf66osyqQYyXhzUh8P",
  "key23": "X4kEBDADFpqZGLsgQTBCh9SZ2jNr92vKUEwi75UxLaGBPYXzKcQSmgyK6GVhnJjAWGcgdj7gfgmjpAWcy8Vy7T4",
  "key24": "4o1vD5WNMTHDoXADLsbtj8ShST66795KPsWZ6rVKdiESQWgSNywvdYuZ9PUpNw7i8YFaFLZTGctkde1ib2ZqRDkj",
  "key25": "5fxcn9QKdAshDtBxtkGFx5sEeZZhf2sqkjTSCZDYCaNLF46DqWDNexQRnx3sf5zdxzzagm9veu3rjKVJxGiTU8qK",
  "key26": "3wLRrLCFjUjKN9FQLdJPNH4ahhjXV7DgHrGsvkRoPNcMqb7RVuHdpQBrSKoModqVMze6LaCer7S5LiRAEp3LNKc",
  "key27": "5AomVagoXi9cVA8RuNYX7QmVjNauSW3iNthkQ225jjNNcEbSYwsCMMgyEZ2b4QbASzbAqNWSZJDtYBNt48d6ZZHt",
  "key28": "66mKvGrJi2TcRWrk3DuCUx73xN34fGhFXrxRi4PoqwquvTKd1BYVMcib7gcokpH61Y7Kns9YyQ23z5BDvesYDTUi",
  "key29": "Whfjwebeb8otvH31jnV4hVjW6x5Axh7BVX4yHnVftEKgWeGAL7qzDK4GGRyWNtYhX6ofn5eQ3X6iMpqV49qaMMR",
  "key30": "4MYDS1ePdWusp84uLkFkusUkuDu8F2emVXogdYbyqpkbw45A81KvtoAGyRfsVn8qsWDN3XHTsge3Mizz6W62TFCm",
  "key31": "4RTVeUkr1uZyek28YfijBAZv7ZawhUPW7k32BBK6XtW93Zt2cUtVEsQnDo4tzY74owR31fsmeBYoR8nu7K6s7qZf",
  "key32": "3GEngw2tPncyeMAatf8uzhnJGMSuwegx33Kn9hYbyALqxTtpnxrvYaY5q4wNmXPnXFSG6EescZkkHqiB5DRCbroa"
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
