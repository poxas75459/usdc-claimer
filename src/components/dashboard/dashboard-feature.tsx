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
    "kBJVTw2gKZJ4QYEifxSNEbcmgxxmeBRUYsNWqDcdnRb4M8MiQfz2a3uKAzv7R9XS4U6QncYCHW8eERKAUgbZfVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pebA9is3DZLPY7ok2juCLhBxGusdqMDS3i6X9xsiiGWGAd4YrQNZvx6pbc7qXPt7VM7ip7irc3qMfXvvk6kBytQ",
  "key1": "3B55KXDW3YVJtdoAx6bFVak3153YakWXSVZcKpHLMiwTZ4SSWqmnprA4MpzayHZ68AxEW5DsYQVMmgp8rH9cVmbR",
  "key2": "3KPgPEVAq4WwapjGoEFP4RwEz9tY5ditTraph3AYePNgnQJCCnp6s6W2pcpqBz1ZjT2icobYY2yoPeTg3sQTF957",
  "key3": "2z4x5mMDc4rdsM7Jo8igLViSFHuuNhCRVm6UeBnEfXR8cpU2C8BmvdinpsefWVhRSS7TepthGHXvkUAPVbAULMro",
  "key4": "3ZrAuP3EKGyNoEEPcK8RJZFZDeFG5JsgczSWmA9BYGmfw8B9V4wLLRnu1Pzn16dhvUZGYhRwC9dCHPExC71BJAY4",
  "key5": "4URSNXZiKLB4keX2gfuhgfRvSybMqbQHHeFKLwUYKJHNrk6APEuJjrZVJCpE8iZrHRJbPQrSRFfUJwgbP7eyFLNn",
  "key6": "2rxrYzDEmX1qgDketqzAc1ix5rj92ULRJztdbfAKqEVsaBeYsUPYCfSrE9af8GaQubePt3qPC8kjBDp5aWShtkXU",
  "key7": "dRc3G1nfpKeumCavfyvZwHy4ybyHFVdsNo7W97gRsA3yJxxtfpYqNkAKK37BvLq9ka9r9oMBQZgZdeSaCdQkiqV",
  "key8": "47YvbtdJWfqihuJkHDLEzUNx8hHPQemfsuYQFZVwMW8A2FqwjgerNEjdd27UvDUwsWgJWSUiFrPpdyCvoZwA9boL",
  "key9": "iEqv2qzKNqfjxdHnNGvHduAbeLp15vJ5mWv3ArUc2ZrwugYb1jG5J4AcarHBPiSY9SXtiEvrjunR5vpJpKUUPHT",
  "key10": "2Gv4kQkSwtTNxbxFKDa4vMsexpDBhZ1KAXffprHGc4sLqdHa2QFfDcTBDun8Y3nizxBy3ptqExeDPwUbnP89vE7k",
  "key11": "4WVUt1E8PXYQ3GFvFDJ82ZUdZDysN2JpGtvoCu6kWzxHd6wke77JQ3gA465psFxTjLfxkbqznEaPvn4a1VeeuKgS",
  "key12": "36CuAHSrk9BmLy2EScMvsvVeMbsR6Te3TqyvaPKAA2t7u254MJDRMHGjFUHfGVzZDoyJjEpUv3tmjW373ZAmPQFA",
  "key13": "4aAU54C4dZLtsX2kuGFKMcMdA17hYXHBLV2h12AHtpoVj1cGAsXVZRtvcH3Yw88795nL6w89csMG7KD7QdhRmN6b",
  "key14": "3QN6utV3MnukyPqnZyhyZVPGbCQxNGo9ZsUasx8S4GhQH4hvvQwARfMx56kdr57EDpVTEs1A7t5bPaVvxSbT5WvK",
  "key15": "64fG64oGdchixE6huCwLxrjfHyBkrC8XqYzDsbwYFzRRFbKsXkEWv8ixe3P2Q87USi9VX4cXe2ZTLzS8bKVgW1q9",
  "key16": "GMnzUEeBds7xtFbdnZVeGBciEtojCtHQ7bGmMxTp9am3BjKVtaLaJCAXPKjDktD1EfppYhyBaiKfJVA2TFCk7M7",
  "key17": "3NWEk721a8uWAzqmorGwvwszUybRnNv8XHSARZqzb1nmSPsudTQ8Vy9kxhUoknV13HJ7RV53Tp6cGpR9mp8akjAB",
  "key18": "3PfU7VECRmhWfSUFfmYYB3hM3u1ykPL67jPpNQ7o1SEoFrtnWX7Q77aJ9HZvqNijD4EMVmQUgbNruXysXpWVgGP7",
  "key19": "4EgcwFLfBXNMKfwfKr2FGoy2TBxsgshtf1yMxR2Mr3EFELkYeQLh9sJXquFdxGgu95tN8tJCyFWCFgRAMZMi3UaW",
  "key20": "5aUKrQAKFXRsyG3m7XFx2eA92aJtvka9CNe1wADZXxVHDygNBupnqi8sLhwPxrEbzasvZH7XTzfTrexMHRQ7Vcjp",
  "key21": "LTYsh2fQ8GHvfxb2N586X6jNPvMbGLHKfkX6t6GAyaazTMyXDr9B1Z1v5NWg1NQPyWjU5V6z7rsJ9U9LsNnLHMo",
  "key22": "4CzyVoiPznehnBcdCzXXqDBBSRP9AXPrqxrtyAp5ZeWuCM3YSiyKfuSU5YdSxy5KJsMPjm8e9nmmq3iq8pGgf5bp",
  "key23": "92HstfaPrf1NEWLg54jfwnFWXKZGspNSuN8C3XHRebzCzSgBbdtzZ76MXC4UUe17BFQRiTdydFQgFtwXHnDiqur",
  "key24": "2FZEQq9RnVQPt6LyUtYfcBrwZYBGrxFVkVQrkM6idxJcyXLYysGzpn9DFJT73y7kyfE6NZwfjCF3DvyT89s2Lb5D",
  "key25": "22QwsDe7E6qnDBzUgRpAfgUha6fMJiLk97XUqYqzVtEb3477o2KQECD1hKVniivXdmYZ7R1iwPy3SjWH77BDTt4Q",
  "key26": "E4zjhBu6zJXAKvV3dZShuRCXGzuXSDC36P6zKWTC2pdkv64Z7smP2FLhpoFnHwJv71tPmdwpVHGsRfwkvUjh1XP",
  "key27": "2pESfCiPWbNVrzjARfuTKa24q3eufVur7nvGL7hDt6PfXyiWPgMXCRXbBVMWRnudbxy7UJiXaXrbSRYMtUXStP1Q",
  "key28": "YwnJmzfpYAkdtj5UxzJkE94DE6yHY2hYzydWNqH9w1jpgp5gK5hMTHpFVyvY9espdn1dK5Jyb8GZG54QLYLEmZ4",
  "key29": "rqnJedf4bbnz6YzNdGkPEMzDgAewnhDUFS2xEHBMNw5FKhjWcU8bpSvKWXmyCmzLfrRnrTuN4Sv2kq8nNizaYhS",
  "key30": "4uXnF5CUvDYtFGgeqXDatqVayphUN6SfqxT37ZMnNsVj6HbwNF2mF1UANWvUDdbaeWwBsRAc4MwEadE3azHFgoQa",
  "key31": "5QRMdNFqo1tFXsbpaNdDXXffGc6FgyBrjRkCKuLxXuA3F2pjMBVpMhhXRcYpX4Dq8VdYxKPTeqAt4Hk1Xiuxb3Uz",
  "key32": "3XaMmuRcQEYQsz1SyKKKXALWJSZwRZ32DjRu3HJ5nwtc59D4gd63N66GGXfcydv67JtdpbNgRtqmu8fahfwc1532",
  "key33": "4BbEcy6i5zWAaTESDRXiUeGJG3YrUEdgVr7buysL191n9jiduzqcJnmsBujy1G8gAFqqGu5MHoefjBiKRsxocWgy",
  "key34": "31qDnYPP2ptPi9Euv1KNGTybatoJfZ8b4b86i9CCUEfsvun2VHo2rR14fnFfwaWb1Zfsbe9pgYWuSRV3AwbXdRgS",
  "key35": "66HWtgZgzAs2uakLvZLv9nZx3HW6PJrqBTYmvP5YEvHftvMPBzq8gRoytxDEHKXtQBa3cQXqqsbB1AFZTmqXQrLQ",
  "key36": "66Wj4UpQBx9DdyL6A9UW3oVsAJvMqvMmYPew572vqx4TSKAtwquBi3zowEapW24sjRNr2jPnzuvvbFVjTJfThmv5",
  "key37": "4j2eV2GCeE1DCDbELRzq4sM2dW8bFU7EtNYZPgARw7EiEgCpPPTUENBLQbgjM29UdLuWjpjx4rsGxP7VmiqKyY3f",
  "key38": "3N7HGKFQWvJFX1v49WBCUx3xP7XNSiKkaKnY71UFeFhgq7T4gyHTBoJgXjBiPQJrdqihcgGNt3iLSrL8zwt5XnyM",
  "key39": "4brkRgzzWVtEh2AcCfYj21w6qyZfVmbkt2qhzhAd22jjV54h5hfJn2WfsPKwsos4zhMRqUiyYvRkvfCwM6QtfWHE",
  "key40": "5Ydu3XHpkJJkv6NQzQfLBbyKqwFVYNBHtBqntcnKoH22xQGZj6gU3xex8DKsN2ss4CveqGk4UWwoXRTSEwTrncNv",
  "key41": "5Z7F1PvBH4JXMujhKWAZt1tNQZzYn5goit78aUFRzEPuFetjTDATjnr5LbBfqS4YjSb5Lh1P5SCarCH1iSWjDkHn",
  "key42": "7eEBXQCW89DpnXNGKS9HSkDB9ixgmKDTqcNYj1ayTDmE2eNBtrVDTPFzJXncibyBdzhoXiLJxHSUvgQo7LpxDgV",
  "key43": "4Zd1CH4u3bPPbKqMbyrjCbFnsFVvrZJrRp3NrsoNtNL9zCVoe8yEejhhsGxk9yz5LN9ipab5fswGuMwm1pi5Tsm",
  "key44": "4LkacxCW4swP5SouJeHWmSrVUK8RHRvNtgsgVREc8EpjE7cunu9ErnnDweQdYyCpqjM6WueAqvjGXtmtdNgFpJPZ",
  "key45": "3imT2yxKZqQfnqD5fcm3yr7Zqvt1otFvYUHjMkfrF9Q7WARXbthnmdfp8y751oDUtRSQcGWxCqMvwbMRhRk9UhvQ",
  "key46": "2iVtNmGR7NnGDchXTcCjfkNgFwCiLqdr8JxJaTrSeaumSK7kpyhFax7nrqQpaQFfRr4Y9jAnPuqHCcrFrMqFr94Q",
  "key47": "3hkJ52fxisxfE8neLaxGgqvXtVDCjW45znp2YJYvpN4VruWeQzpmH5VbAcSSRZ2m5odoFrbqdEodaT1bSvGMhKZv",
  "key48": "4qkFr4vqLgJBxBE4VYonCPUbc2QpCdmS62u6J3tVJD5tS5Q9qPNgrpdDYD1kHCXAgn2uGrUV51hNEtsFwcpp6VpE"
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
