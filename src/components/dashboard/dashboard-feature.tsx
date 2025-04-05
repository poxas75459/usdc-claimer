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
    "2Y9xZF1YrD9TkTFTroWYp2SRZmK7pGSeAvYY5EAq2f4YKeLy6GfB3N5jdUiwMbTFbxkzyWYZQkWKJYvBeaWtnh9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6YaDFpZ3ypTPu5Ww8L1W7EVcb5XkT1Dnw9dFJGsvopqh3NNw1VHXwfUHWbZgYTJDjMWx8c8xSdx3hsT6efSdgm",
  "key1": "2XwPW3nsKttqZisW3zS5yvXXPPWtqB3H32eQxyFpukCmEUVkVPjGZJeyykxJaijjEfGwVDWGraAQLmM6SArmmN8R",
  "key2": "2W1F1v9nGaa6otUQjJnVvvdhSj751EeWCmfYeA14PVC6BpbzMmvhMt96i86rAxqdZcYDAjKKmJ3ztZ6ZVTMiZCX1",
  "key3": "5Q5fsWpuu7cLLF3Yxpfuj93SB3RBeNBX17Q9nFDZwhWY3ZZgGeV9aJ8ycevM5mBm1QYVPY6vNVFJoCdA71jm62yX",
  "key4": "5VZA9Aqc6GBtsdKTsAXU3P4SUxLLGBhDs5meKxbdKAByqLTUEt76cgJK9aX32kBfopPH7oAUn2zfQXzvMUfeufLH",
  "key5": "5KDDgMGTUoAt1ZHjWLAJCkcMtjJTpURmt7zwW5Jwx2KtA5VqVyzDm6eMADTpfqJPsGbXMWLtxyvKhyG7evVanznU",
  "key6": "215StE7DSaDSsFrLuYz3JPmuA5YJPiXsMYHRjuA7d6XxdZnEmsNfkym953ujuWaTybsL7MbgXn4upKapsrE75RZq",
  "key7": "2xiFcc8djAdWjH5kkw4SZCpQWsQPvsjuwTW9rNi6zn3mAkaCZCUJh3mBMqhD3Un5d9QMmnQL6LoxRkN3fCSgkoSb",
  "key8": "4QHzUsRdmVi2o8QQ2V1SdGvjy6yAoG8boMQuBhjwyFLTuYC5Az8nxgGZpHQ1PyrWq1TV5ahcXFy7y9W3JFVwgp2C",
  "key9": "2hSfjRuzjEknEh1eAsjsWZFwZxGoBNzv7G5c94KMkJ32XqSqbBn3ReWj9XpUEnjzgBffAoCiNQNNgcCp9EUTt8VJ",
  "key10": "2ZujUgv7YPRho32n9of6dJeHy2Dyjd54TzeLTfAvagnYkqfkJJpZzYSpP9BP1v3ctLJL8JYqWJjSkMEQmNhtWQQS",
  "key11": "KAN7J6DYARRXy9kF24VDdaZRAgkPW5B7cT6htXBBV61BTvDNpm5xQE23XR5ZWLJUtcZ7Xh2CrprizEt6brLazpy",
  "key12": "iYNqAiYWEPo5Zr1J7PphgY12L2K8q1Rqhpvx41aExiuKHkrqGPx1YgLbUV2cqxvy9LiYeaWmcuL9ZhfNf6JVEoK",
  "key13": "5cJ45awFFfKfq7UcvfERUYP5qFkCux31V9hvZJuVfsNWKQ8fCVQQV1LqWtjXuPBfdKZeRqQdhJg37ux3TZ1Bxs13",
  "key14": "3KDBi6dyK76u6YWHcXZ3WZAUN7jX9EpGQ3kapSCVhk8AwV5wDN5JteuwAPF3AEbxvhwvxLXDPjaAs4GJU8E47gJP",
  "key15": "2mN4EFPWB8Qdxn6xMDwVkDonuGdQtvB9n2uWBHFTAbtvJoJisxq55ZtQrqWVEVs1egjvSDss1SrrFnoihFZyFB7N",
  "key16": "QZh9PC5hvvPfJyVKoUjfxe6AmgcHcQo9FB6zEpztprc7MWwNv93ESywRw9hPn6wb1Lu7kFY5rxxr9iE9WotU44S",
  "key17": "5bTvW15XFam1pFJgn786Q9MZzuP2NvheEW15BghSWMS65q2PbW7dSKuJbieUWrQ14Aj5YgMrM4D67TtVgMbDDSpb",
  "key18": "4fy98vHZFsVZ9SGzj9XdNsQsEr9EAUP7jAkZUVbqnrPK4kJzzrHQciww4NqZm3vM7keZxdDAx6ujqBUuCirLZpdG",
  "key19": "39rThvUbve9R8HsejrAGbfvjZt5zTpYWU1oZY6HTrfpfE6FC5SBt41sT1rU9SW5s5RysrA8AkT8p9PvC78d3MWQL",
  "key20": "2bHBbhzmZX3YK7aewczcwcGC1gkcX4r1ubuYF7thGJS4fjfG5n5R8HfARMuq5mnpRfE8Yvn5MGU68rRWBXd38okg",
  "key21": "5SCA6SPhtWzScPUzVvohGkcZJoyJuNFTSMhUERKtTiuSfi8MUkqRfbTrQbbALTXP5HcV18f6BfjvDk1N2tkNCRtb",
  "key22": "3QhUW7tjQT5snZzB6JtLtFnWH71DwyxgbVyfE1UgKjs4MA7V6AfgMRtSpTR8WLkmi4XA6weXthPrFf68M9iDFQdW",
  "key23": "4u1BsRCZNsWG7egvMTiubJ9Jk9rV5tPC8h4sNNDehVGMZLjtJkjvL2tycXSgWtq2NQTX8abCfUUB9q3KYmdr7VmG",
  "key24": "2SMkfBKfegBGRLcMh4MMcWpKzTvtcFYo16sdH7b5AXaGtKAbwj5TMahHJun1UojVCyqmJ1s3Y2Ft97gA3wn8HGim",
  "key25": "jwjcYkaA8x1eHrUKzbGCMAT2h88jhdfxYteueq4dwcm6S6sF3y4uFw9XjAko5zA3PbK4PHoSwXAPEA2JLsDoCre",
  "key26": "2iWe31Qkh8jayth1nHiDcWzshsHp8uK2rpk92ezT7bdj9PxaREbF5oe23fisU9uNin3kQYGeNvmXnEDoMBLN2nKP",
  "key27": "5MFd9werD1dRRqtsNriiHsBWxVo5YvjdgMYifYTtsvHHDSus5iMY1md7N22PyTLiTxTE2HvEX9o65p9owJr5R8ZS",
  "key28": "4sC8WLq6vaCYA3iRahLeqpzY6oDftnUwy9TfYKa3WhMrAk89qEuXQurK26pFJ5AmXsWsjoHTbgbWtkMoyeaSAE7V",
  "key29": "3LNfDSSmN8rqM5qpgjp4QpmB4o8Hz2KCJSevKXfqcwA2GdD96DsHxJ7RMnVFTVEoLxq6mFs3WEH3ARoQFQkUmEsT",
  "key30": "66mEN6J4LEGXHjHHzmVaYuoQfm7eRa7awE8Gi2wniV1r9pXDWM37mNj5e1ARmx3hYCxvdP59p6NeKJhYFXeiSbdD",
  "key31": "4mpPkLKxgPWsiGScrdLLqLhcqTyV4vGpxt1ZNNaep1nYEnGjz9kFt9snEomQYkFpawyCQDMFdNfLAcVWRRL5Ky5",
  "key32": "3ux8PU2eM5pwQDF6kjwDEF5zBcZeXP2EjZxZ7giBtgjCtxDHu2ssUfvWsV79TjSZ7Tk39Dd2zTmBKTUqrNKmVG1W",
  "key33": "2XxdfqRyeezn5faQLQxWQVP5ZYjgFcqAUEod84MQ9u3wiXareuXHSPjGsD6Jacxhr7iRKu39edoFHfeFzHQyez4L",
  "key34": "5MHak3j46iH3tY97adwMYFT2yrDeZ2fdDekYz5gDWbTrUJfobm5p4U9goBokJrqqRrHUbWznDH57xFXB1RnbEXWZ",
  "key35": "34g52Zg8whpttFEyngLL7ZxgpaZhXRDKEpcVd3SvnDNwmKGwmKYeTTpPTHG8xPrKMU4CNgYvgRfxGyRxtdzvULTM",
  "key36": "4tvhu1hANuVPVQHZGpPZFGyzZFGq7jCh17CZgyfSL1u2Dt7Pi6e2h3usX3wbPkCEqPVaJ4mfeAqvLQY7tDHMWbk",
  "key37": "ziR6zJQnh3Kn21aMh4rNZEnENFPHszektPMbTo67UnizZKrmTBKjgJ7Wr6GNcEA8oLGdKibGB4zotm9TsRgZC1F",
  "key38": "3h3ZRwZjf3RrTGN3gqw8tjqGTYiKrbKpN84xXhcz5Tguw5ytLRhNCmYujg12e422hUZ1CkXUZvmLnDzmPwT6vfHa",
  "key39": "2TQ64z1cWbaATEspx59SKDrL1KzcHBzM2dFRje4FiqdwmQfJxNA7tTchReqtFW3UfGQcHM7coei6PfLNgWHgdsRx",
  "key40": "3d2ayXkPREonVVkyRcDFyL27wsK19iXZeJrsaBKibigSSuwHCaW4kyrtWHVyBhJfEVdHHyNDsBC3Sx4nFhR5GuWB",
  "key41": "5y1Kaj5ND7hBDyncjxK8qk99FBqsuxBvbC61oz9H4yTb516SqFgsoLLwdzy92YuSWCvvA478N4z8TPTPuoMaie8J",
  "key42": "dE1AC5yQjMTHvXDHB1BGeJd5qVKNxYHj26PbgZaqjaHPnZPaioq8BMREboAYqxYmsjiD1PorLYhGG6GZTp5mWHp",
  "key43": "5rF8cC1MqJAroRGQP8neU7aFzkA4uSYv2t8SAdQ8sSvD4k2sCe3Qzmm4f61YUvybJxxQUmxWZdyhoVLgchiGHF17",
  "key44": "5PWpdY6xe49fFrR2MbvjQW42DVYPnffDv4E2PDziPS1XewFphVdJmJkoaGLLdqx8StZqSHRMWyRVAybKvhXdhRZT",
  "key45": "3u4a9MpLdXVkF6yievLvC1pWEJxJWQEdpotaTBhSUs8DiT6u63i3o595UmiD93hn2uygyoTB5sduZGqh6BCHioCx",
  "key46": "2KYwt3sqhzpjRMH1kVDaS2Cf3ZGdqWvfDVKd3YyNmXUPDrNwQraemFDdqWzUerDFdGZnSHoWGENJbDhYwjoaPfXo",
  "key47": "5dnGbwUs8aqoP1pdTnztUzCwqbf4rVrKDQjgMzGhiLjGiiF1PK7m3A7d5n1CN4p9tHzzYEwsUhZQ8nbPyENRcss4",
  "key48": "5SUxQFXGQXAa4cywmpvYcgt7kQDbaRuF1c1QKrpR4L6df4TxCqLEhwryoP5FLiP7kjxBVBefDr5nsxA6SK7qFrvu",
  "key49": "4MwwuRsXn4SCfy77tMJfcyrx7KfDtxWbmJ6TXsdjqeVPN75MHMG4hQNrAYSYQY6LAQy9uGUWDXNAhhMHswo2hTaD"
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
