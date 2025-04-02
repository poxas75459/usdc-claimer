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
    "5MNpXRbqmBHnksdsAysCuEmUvAaP97HMgsQpLZfNZh1czXMvZ8cP8WCHbKLDL2mVpBPMNYnh8cgeSrwRFgAv6X3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBiQxog2yNwCBxm4XCdHbJSrZ5LXS13WEaLeZQJp5nZpkjwMjtvAbWa4xpLdiHQsYh13dCL9jrDqkBvGAi8GZW8",
  "key1": "EbEKAiffRUEVE1vVaY1TdvJJ2P19Cj8EXRwn21gQe9Ehg1uon3aCPjZQ5FrEohPvQ3Br1uW7szfbNf4ccHq4gZK",
  "key2": "5tiwkwJyTfoMix8mBqRaJPJR9QdETpA45s2DPSLenkCW61ZzfeNtxnr1sdoDJUpfBB5TTL5edrK6E8cJoajxdNX4",
  "key3": "vvuEBg8pteLYWrhGCLNobpQEZgjRDWugRvguK5dgYHikVY85uWLBj8M94JSyjMNs6qcUbEkiHzyaZHLKPmkbkFf",
  "key4": "4NjST11tcqZuoP8EYXxsCren6AsZJyHAEAooNLwemQBNPBfn7UecLcejcEyLkBJwURmLwbHt7tewXzpxZytE83im",
  "key5": "3fefueq94q3378kw1aKD8qR2bjQv77wQgTgtYJYKbnwk7Wo2Q5ef8gPEyib5XYZcyZctrTeB5kK8HwNxJtSxVKf5",
  "key6": "tf6BxY5RoWYAAcNDBGgv64EkAZtwn1t8wcxdcLt92TP4yzsCn5tH3rWu4nvPUitZAbqmNzNrPc1jKSynxdJcdr8",
  "key7": "ktJFUuuWrearbSTw7jeg6rmfPKZKXPmYgToYJMacRxfYJsvNxy9UvsUcTcakiM8EG9omYaUcBVgtuyBgjk71xTV",
  "key8": "rNbWsTexA4pqLAGdyarMKqKDCTrDGzqPrMsV5QE3ntf2hbH8uyboqCUco2ZazzbCqQTaWjGfwxdPASi5JSgYBsU",
  "key9": "4G8TaZppiBgiVphCdnpn8n1GFe3HUrQ7SEBonQtbtnFsJRXt1SKrYsQpGWUKcYiJa1YsZKpwezCaADPV6F76Mbh3",
  "key10": "4nqdddVSrNpPFFxKWxDCDzpa31ZkZG45jKJ99CTki1zCrzDJ4FE6521BrsQ3RxPH8vDxA1ng5soUcN5uWqmpZm4T",
  "key11": "2akH3iB4SikArYZtprUuAJgTfy3Bmk4PtxV6oBUronKWaWeceDZhP3iNcRmiNTzFPpyyhBs7X79NSYKXXTgdfX3P",
  "key12": "2meupQ2HAvnPcKWPqwGUWAXdPQcGNu6KXgq9m3VX32HsR5E6a2bebxYpBdHVj25jLGRcAMZuVir8Y4mCVUuF7Rgf",
  "key13": "2tCvbjqStpkUJsVYRX8GDnosct4W8zFKdf9mNpgjKLdVWx3USvVPPTjGNq7r1RhLw9RjRHhBjYEGxCHQXkqF5Z1J",
  "key14": "TbzKkes8rdsDoGnWkoJP4a9Cyx6nPnkfoenuXqrmk2qHEp6qR7TjRKhrfnsLS9kRBwSqiZdgJUF7TABeCaGj9LZ",
  "key15": "SqwDAzMErrfx2mDKM8F2vjt9kLUWii6rbi4E4LRwtrZdJ5cEViL67ULdtemRwFQMZKfnUbdbnWY7twjUvzvmkth",
  "key16": "3JeRiWhfr4bw5j2cPLDAcWj5T3eENw9fT4oDP1ZDbMVP8z6oDrBNSAav2sKyVM3pjr7RFVYmh13j3WeQF7jVbxFz",
  "key17": "4W7chKhyNtWYjBbsB7P6efUEo3HL5YhHLFPSvN8To1kGtAPhPLrfDCuv4AP8xtQwe7JFHsQosj9jMR6RoAMCH1Ee",
  "key18": "56ibk8J14ZzB5riFt9Fx3QQ5Cuhd9PDSMNEs8hpoN7BiZcE8j1mnjkPnMRVvbif7F9r1e5K7KeRDRU5Zn3KCrGiG",
  "key19": "5okZLPekkFfJzPmw4pUDruzFfmhoPNXyY2EdRdnVwregfjsfNQ59upjEMNnEbsHdEUqUkwSDYSurW8mDkSPxZQQU",
  "key20": "q9yCo56Nbn9GTBdty7djCY2DgtFievigWR7XrsjP5u6xJ99689j5oxPKhEhvUavEaVDBLtnnEN5GCEdMEpjuAoK",
  "key21": "3caXyZpb4UHXhRsFnGhmS1aeKQGW1tZeKeKhZJjeg6kf5Tzymip5DSuVMyMGYGRGh8Ua35z1TG2aW4Y2ToHBpeQv",
  "key22": "xcLr1bf4LLEKRCRvhopQRFCjaKqMb2CQwEjhryfmk3tfjqjZLxBtYrbydUueqWfwtfvwH2juipc4UBhGjFyKbPS",
  "key23": "6UPZwvRGFwBcc92GPP1A6V7ahyGPBqV2RUeSvPiA5rL6tGag2YWVkCo6ncMuaiFqEU7ff6qsL5AN29bi3XWjoQz",
  "key24": "2WWJ5n8fHifqxAidALxRWb2yh5PP1ZpvVYd5nBVzB8TgHCuU8AtMRciUpvtAVxU3ygAeQCxtHKdqE6gR8csvnnDN",
  "key25": "3KiB9MdYuPy1z5fWmKsdLPw4ar5i42ysSX5zyhzTwXCYZZWfWYPrNfdPa7L6yLA2WkZ7EhUH1rW35ELFQFYDPNqU",
  "key26": "4wJ14JywiXDKP9mEc9LSXizCXBkqPWu3FpXcHz5HNSdtjkxoULrLGbeDVgJxFnkBqKguaB69PomCiZzKeDpBevTc",
  "key27": "2jZgmRj3rFhsgrMtFz5sLosGH1qpWXpCXV9M2WM2tHE77z5EMiqLv1vuLUaDp7mmSGBCNFLJweCmNqZiHqPM1V8t",
  "key28": "U92oior7fHgmowNekCX4Eakt8nRBgU3ssoYQzPkyEddqRqGnki3BLFmWTd5fTcWNRvoh5mCj6d3cWf1gUsBiooG",
  "key29": "4DxPaBjVuaVdEZyeTBu2mGbALD8tgzzsLyU3WGnvucZAo2ede8qGAGQc71oj6w65BL8hTgNBgfcUdxyCxbAyEj1d",
  "key30": "4xY65msPtLXSDk7776fAABrtAbrocQycUvXCSaJkdDdQHhVBeA3soANhuwCdqpkb1VYfTCoUQYNo3vgLzr5KDmX2",
  "key31": "tbzcQZj11x4sFXt1ZWizoXK74oeKu5ynoiuP9nMu92WAFLCYjeBjEtYDLYiPHjpEJ7m29LZu8fFVjxcxRNeXwNn",
  "key32": "3KDsHZ6Rd47HpUVbvtZXffsEcZwmzMn6npMN38yPy7Gs6G7PjiBwnw2QSC1LeHk3wKSnEpM94p6mE8XhrQhdAbZQ",
  "key33": "3a7cj6eRu3ccgiZd54FiHgJZEjMhSuJiLDUSs4UBYWky3XrwuF4NZhdtsWQPAY7cxVRXzu3gJabbB4D2kUaEzGXd",
  "key34": "5ZaLELvYWSofaNdkMrdwhU5Jr3cMuxz6bTp6DULNXd9x9aCvKJLUoF4pCwKb2oPLAFjZgAx3QkVodS3EqgZ6aVLj",
  "key35": "2BAcFJPYc2ou8hxhp7LC1TYXAJ3CuSXygi4hFekyXwfM8hwSvJBDF3rfMxnUTZuAGnCb3NyQNUDk56Aw2KsoHDzs",
  "key36": "4TWnKxE9GKQJ6qBp9ennTMwWbYPCZNeHsERbjA8gg44j9gkGCT81NC2YkQQsGb5BeAfKPcYZ2iFSBLrpnzypWzTj",
  "key37": "5sbLKJ9YhJt8m5hJRFmAusHH1oKfYumxRQDfBBXMCNX24s7epeogTPBkBokvkcm83Xue914TQJK4wTqBmEWAcweD",
  "key38": "5phWNYLoeHs1UWN3N8pESTSffYd5A1nSGGpuTmebiVW9VXXz36rXV3asWizaY8WHYS6QLKdEoQUvU1ZNHFTTWvaL"
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
