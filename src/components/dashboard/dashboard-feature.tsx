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
    "5A8Sm7nUopx1eNChQxkfD59MdtdeNJTpHWVaNA8RyU7yE7o4drYyLptxm61rQ1WJgiF9e3MkRS51dAsgPWwPmuzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kf1LZYFSbWt4Yy7VY6iWhZ8zJdutKfGPRaGZjfc5zShRZXp4XXRUMFWtS2xwTxc17pk5ugw4gBhzuYr3NEHTyTt",
  "key1": "4qgTJmncKdy6dp8SDDVbV6BTDDbMpfvHagdv6do2uVaFqrJrRPj8vSff1Gt9sBd35UrUvBVTv4hkE4pCeoBDRQjx",
  "key2": "W2pKiWQEx73cy6dx388Vmv2WTAFTxATjcZD53Ri8n83fyKgdxBcR1gcN65CnERvVJ9L2BMChcqnFxeeNhgrFFKH",
  "key3": "6gJwLsn49nZyD9mgK8zja2N4JEGAzTwCnMCV6Akgsf7UtCJjUnRCoNwwupdM6p773DML96rpKQXdnSiZGZD9Cu3",
  "key4": "5Db7kbGrLxLjfUc4VNjSpyNEg92RomNxhhZpoGbHv5Q7YvtNNivcTzXcHWNDd61diRUx24gJKdqW62EHi6fjraN8",
  "key5": "3UUhTztRFBPymwuauR5BJXt9gz4GjuvaL5ojdqZ6XrpTp1vxQyx3ZBnBULnq3KT3jJvL9PHAQwS4GUn3yLr1TSps",
  "key6": "2TSh9JHN7RzApaGnqJ9vSaRCvcxwDeJzAaARFHYLEVUB83YnzeJtvHmUYbnaP2zC7XALBfZPjz1UTTobV6soiMvM",
  "key7": "4z1XmGYo7if7N1x9Wx4eBhBnusXgZVfgqufpkC5nv5HoMaeD9mbFznUuhnQvqFc8kkGDFLwH3vBxv5xZFiQ2bANv",
  "key8": "2f8ZefKfi1JCgZz6qNwV96HXfA1ANN4z5GNN2azgny8W7DiiexWzAVp8PCYPbJyhhszSKsACQiwJ7eSo9JPNFxTq",
  "key9": "YAMRYVbwdeAiqz64Xi3APc79Thycm2ovv2ypjYs75PLZ6MLPT8GPuRXRUouhHQd7Fm5z4ZPdKjqmT3XTNxjTpcv",
  "key10": "2RhVxUiaZLYgsaNg23vV7YBdMFgck6Ywwhwo7W5SMNi8ey9QnFnbMeyPukgZxjn7h3n4VG2KwzeXDDX4PMA3BrzN",
  "key11": "5ecujf86ERNAvP3vEWfBXDEYdEVcbrA6RYn7tQSFiq9t2V6gKngPq6Wwby2tvjaGcTt3psJwQVmy4uYEafXoMJ6M",
  "key12": "3YHfsD8hp66qs7pAEEP72rPcv4vd8CDAAU5pYGDcADm3vEBcFWQ7Z5xFmAKs9e3G13NWew3kjRPFuq67hzywoQdF",
  "key13": "4rmgHmanaCm2sauK5NUQJvFj4AKVRb9Gkzc9zrSwQA1CY1Pg1FaoZz5MUAQrcRrGHdsCgEZwTsb9HpzFAnWDiw9y",
  "key14": "2LWGjHqG7QhJxpXgB3KS5ALBF6grBwS1CDrfRGXJhz8nTXSFUc4koAtuSKy7ptmKt5jPcZ6NFL6V6zFBdhaxE6Wk",
  "key15": "3XHYk2oWeyzzh4bqkCizJ6YbU4dCc7fAsock52ES4cV2kab7qtS2Vzf2S2mzVXT5jDUu1fovx3vqUugWsf2i4QzD",
  "key16": "2P9yJaMX5n4UH9QGmj7X67sHv8MMcDaGbcMNMBzrgrxpLqjakyk3vVhPUuprZa97ccLNU29Xmug7YzoBsVrtnLJX",
  "key17": "4jyCRP5MsZw3vkiHJzQ8fSphDysnESGniHMeEwPd3NFWA1GzGXoSvKpXi3rntvpAuSsGUsdmgfn5EpRfP34vgEGg",
  "key18": "cXePSbLH87onFueZMRbezJmGkofqe7A8oRDPFWiVfRzjWoxgpethXVm4qK99Sm4WhVYA3qF97DGe8PQAxa582fP",
  "key19": "cAm3PBBeWRWJLYEdZdhhtLeHc3eeLQm31ksdo2G87TLo4sQ4xAb2Cyv8jPJjtSui7Z7U185GJoEq2oAV8n7gXCi",
  "key20": "23pCyHwWkAdevufzHoZtvqcwiRYbdRt1gwMSGjEiQeV9788SMqrLMAReQqUwjycUH2W3aJWbfTvZK1xmqjCFLWTK",
  "key21": "23TRZGD2ZULGKTPxrCepwKTojCxL8gAfQEbvoYw6pxaYtA8X3H5v6fBz1QM5xV2RwFE8aUAxyrnkSfVXa9HFmYf3",
  "key22": "t9ndwC3Hs28KRGrB1p2ubUiEtCzutM8x36afvpN5TeZWMDPpWoz1q9hwYYML7pxw4KsyUQab2ETF2U4eLUgKVqA",
  "key23": "36J8CnMiH8yiPXduMw6C41w3NqUsKqHN51SMJ1PAb6dTxjSBUXMbjLoNGTow9d1AMm6Gs8MWiNcUREUJWAJEGZu7",
  "key24": "5uwrVsz9UHMtv2ha3q6m9Cr8K2o3en8Sm5bdH31BDYne8en67XSDpotbjHPewHae7GXFcqBxhTAHXwyKKZQ6mbtb",
  "key25": "41QVjHi5thnvNgfU7gLmb8BfUxe1ha88jYvZGMGJWNgoADLSqX8pFfjUWbHhshwkyDqpeL8fpSmTGJG6zsVJXhny",
  "key26": "3kCoQWmrapFHswMZgRFVBNcx7HpMYdmVmb4Qyp2VT8ZUSDp4sTKfi8SWwkqgteFgmT2kHqUZh2cw27MDVMRGsUrV",
  "key27": "5HLTBzq3cajmFHVhaPb1wb9f8botjqNzhBfZ4aTxYxaDYVMF5Q5rYE6LNDQqhYuBksVDndYE1ju7i7eJDivcPgB6",
  "key28": "2Tokp7BY2EqK4J7L97SaKRv6Tet8DAAg21SY84vBeuYzpiUFSRaL3ewkbFVj5133fq5rtiFtBmNdqRd82p7gYrPP",
  "key29": "4w8UepB34oK3S5ZmyN3kpzE25w8z9ntB5XB9EpWJJaQUwZLGFoQB82icHJ89TW8w2YasVuToKezCjHeSEamP6ahh",
  "key30": "3vKNieBHEuVKXAASxMeHwnw1Eks2zJexiKjHA95NZVMEfG77c8RGezjMuTb4PqQZiP2XHR2ehBqYcTb8YGsaExVx",
  "key31": "435uFDSJESgZ9j56PiLLk2jec7v5qXp8wFrYCu6thSZkGBxDSFivQsg8LdLgLxEzjCdD4HMY3FvMroNGbzUXR3Kr",
  "key32": "2yhpJdcWsVcinbk5jysbeFYFrNpvFjW8m1xeeeNjuU5U9KT42BFubRT3Snn4xnnYwZDsxtYQWBCVwECqCCor75st",
  "key33": "3RsnxYgcpCeLpYtDPrzhpenaL84bTq6EiVFagYxDVEL1AHLBitaRcq2HiDoHti4sCL6214dxY8WSohyyev27tFo6",
  "key34": "3aC7C6rZCRdxbeMxxRQGaVo1uE4bAK2BqRx92sm5Cc9tpBPFPaNXMBtBeMq2MvLTHy12mMRB4qSYMp2vQ9dB9DGa"
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
