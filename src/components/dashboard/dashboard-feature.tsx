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
    "129MHcyhosy6YWKH8sxhXjMQbb1URUQ6LffhWe55nks2mhX8VwPxG6UmKS2WFawjwTdWn7gMfnYgsgHnRSxdaMNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GeNq3vNZwZhL3YZVCHNBC1SGrUeabjLPdPexn53LLiHTwspCP4AxipjDcivX4bbxSecSJ6uGXkhDw3BVmWxZx98",
  "key1": "3FknVw5pBqGtgpwAw2BMN44JE3R6JFnWYVQPKa2miqttQ52hykHbs2eCz1nEhDaT9h9r29vhFPdKn92ALifxrJ5W",
  "key2": "DSCPBfYGVpoMZkEoNDRue8xrdJxwRXfeHbAdjMx1fpmKcTVtbsQ1JziJxekEUgDZMDzubQA8q31ax6kMbWRfpvn",
  "key3": "6iyo967yMLn6oF6qXhrxPkj2QtGScSwt2SnPsRN6qASPdAvPGydaJqkLnNc2MXtHJCgzXWg2wAQDCarZTKfA32k",
  "key4": "qvMAKM6Ugyj9pReue4R4JtGaopsJArZ5vSDCVz9UTAnjEEh5m8tQn8L47YbWUJZBGSNxAtG3D7qPQk9pcVMpbWm",
  "key5": "2iN2HwY5qnZPi6qp2JzRAtB5aBw38nxbUwmh3kz9H74J3XwmZhRMbVj6Dg2ngNeqoQ4GPULkKsn1PzF8sT82teWS",
  "key6": "4v8qrDvmhh6c5y5Wn1hF9iLeiMHoGPLf4fWkedMqs5eGuZmrxbbZb9GrwdykJctnBQdPtZBgyych8TS5LicJyXK4",
  "key7": "5eQSw2oaRoT4ed5tEj7DfhgoxqNovDHHtfHqQJp5v9Dv38Hu2Tm5Zhbt4qnp2XN1dPtjmpZMm6FfBzv6TLi6Smi3",
  "key8": "7EzKWyWGMnhUBLx3Yiz1pP2FBAca1wcbG7ZoWgpaaQVsjgc3eD7zvg4XeXYrr6FpN871YsnStYa8gwdxP4DEiFn",
  "key9": "8bgszUXeqoKfbWzn8Fo4CFay2sL4FaCwZoVsZaAY4AysUR4oCNa1u7XvKSaVD1qUAWyNAYwkegM8yHdjh2LAMHM",
  "key10": "4n76Zpy1DvNEpXsEPUFtHs4hSyCWqekN7MiW4G7bvRz6CdTPqGqtJzxoEoz4CfeCi7dCuF3BHskaUTLvdAxSswF4",
  "key11": "4f1i5izYHNHfnufpuZJnpwKCCz94AprAtP6BA8vKfiMXXHQzM9NgE6gMfGp4YCsmvLVkkenLFNoPDsZC2bjxqK5N",
  "key12": "abrVoPMdhmnPZ1bavth1uaSdeS59KSLnpqyVWupzsnYYYxKqPQ43U2FiDTemhZs9aMCeuVeao8vWyN56wTaK4hJ",
  "key13": "27qhkmCyozyJZqQ1BpNoM1X4uH2N4LaoP4X886SqDShUHNqXQ85PcdsubFoqJtjyrkZYxK3ibTqnCQE6dsGbmuaM",
  "key14": "3Hg1Q81MgwoSDyU5zXrdqD3WrDpe3XpcSGeUavpcz4wAM1NyWsognPtvk7RdfebmfbCkwkvq6dG38MSqMLr1VhBn",
  "key15": "4U8U9Pkb1onPVRRZP29cLKiWmVAM6Rsn7sdfRVRUbRQu5oYwMdaq4wELz13b37zDdPCfGYCqN5hacC9xJmZBMPJU",
  "key16": "ot2HPxszn2dJvLn1MDDRmLdkxHT453pVTwZUNMTzaFLwLecZkpmNW9GMJEfXQDCRXiwjxTtooog3BWYV27ZH3dV",
  "key17": "3WnZKfqJy7JwJ4v5bJVVnhooFqEcwqP1Rn2Ev2He5rSraUVWuuWqimW2AegPFqhADwq4qq8m4hvuFBuLU4UjJeps",
  "key18": "3tPsMoztLdBffW2JczkeU47JHua4bEbLscK8gfgczPM3Yr8N7Zg8ntgJCapWx1dLg6HPTNasU4eeACHWjtCMKuSt",
  "key19": "TPVVBE7k1XtqALaojYS6xSyCL4vStNYSKWLbURPkACeLMmAZxf4VgMZqg4riashncDjGHGhianebD1qeWh4CRxc",
  "key20": "4SaV5Zar4SGzEs6pJcKZeEvPWUDqxCVoBGDbPxXjd74Yir8Scde8YtUFqmHBYjCMDzEDHaBVcvyJCnEqM4vdo5ND",
  "key21": "5Qe2RaA4UpMCdfwDRDbBMnkszAVFn69pnpz1yAy2m7eQgjT8P7VJuyJ4PAGXn9Dh3xxPmveEzbdbyi1Rm3KQwgCU",
  "key22": "4CYy9T35i5yWVpeEmXpJSBewAuRVTvabnB6ZTL9HJn2kmUqhfrWqYSYTwZ7vnhcnsfB1saSF93PNBVrUu1q89FNY",
  "key23": "4ALAbJXPQGAaFXSF27CptcAA9jVNBZRhBhUUJaPULDL8WM1fHkF5TzL7yBBfozagpxCgGEgWLrbM9WdtDQQafhWK",
  "key24": "JaT9yApN7iqvYmNyrPhT69qTiHejikpfivaaUCRLGPnm8M58uZ8Z8TCw4FjCNmUMhgDhVEAAtJxShu4ggiUYcgG",
  "key25": "5FEvsZvUmpyKUb3Z5binhwgsaCY8Pu9czP9Codr92FcFzazTE1eyxCoHqg98kpq9bhwX2YE65npGFyqtYzAgxcJ1",
  "key26": "V2ABVgSST9yRM6SMbypRDHG5e62NPSNfqMLpx8AL2JnjHswmyRnyD47rrojg3bnkRJA5DDhfVNTavi1oSAQdaJ7",
  "key27": "2S6iVLhjKWdoTqEe78pnCCw3hqrCZTA8RbxHtrjWqBd2ihzGevz6VynsBXyNHbAKthj536acgD8ggZAiS53BzdQL",
  "key28": "42QNwn6x2LTvGM3nPPFFMktouuwBfmm6kiPjgWwxU4bYEu4MpGuxdzGZsR2YsiYEr6Fx5VzS5MnCJAcds3BJQkuZ",
  "key29": "3rbLkKiycSndjdZTqZYbcKmV6YcrJxQCNez9xENtP9oo6Ps8B6K8qySzu5MrQKdjMyhpXJ1DjEbrc6rPvELyvaQX",
  "key30": "4GdLspdoT7PdDqbf4oZb7Fi5bQAe9Tp9UyoxqGga9iR1PVXkm91utLWoNgHbwDQPocvaAAh7NEAANsMoj58gTE83",
  "key31": "CADYETVmb7tEVkBGiSewPpZZgxG3k7uyjMoDTV4HVt5qFbX19rAbv38Ymgy6VZ3yGPZiDYZGMQCPdhwX8vh2CAe",
  "key32": "5WbGAu4zFCeeXsvi1H5Rk2TxGvU2srCynsgsb45CAy8ib7g8PhmjAFMNMwtaSfzsX25sQDaZBSAuR1yN7Y1vBmHF",
  "key33": "5Ebj35fK48CojdbcYngNuP25swUoSe5WrfmYDDmqVMgaygLbkEws3uoDnvMZv9ik6abyxgT8TgXS3BEZv6xdPH2y",
  "key34": "4sgtqdbkbSXKggs3RdFxrBTod61oNfHKTT4xgsX8Jfx9MPjegTNMiGNbuDkT93DV8BoH7QaDy6Tx2iYXMHbNN9Ah",
  "key35": "2TWrocjbdyiL1wFWSpjN3mTRph9kwNp2Yk6qUWwYvvE8nhbU6oN8ZRApbk2k1e6aYtzGnEiCL4qsAkVXtrQzkDBU",
  "key36": "2uxjqzYP2TXxwjNQLW7hWW2xET9HMCA4Hr9STsrpHH23NJfKRCYm55SEDBEssnFv2DJK13ytcrz2p2Y4nKVe5b6y",
  "key37": "2WHxd84G5YyLEmyJRSYGge2LDU3fzrsjqxBzKfFxSXpv7Yx4XUsKDgmUNwEpDn8jqJfPXTMqd5rYiPHMXhA9TES2",
  "key38": "5yiVTsKwDTVUUZJ67X8gvoiGjLmN4VfuGxBoqFuXR1mTjxLv4k1rAk7ybXws2v3EKbcz5f2Eig9GHEJ4s2UFajFL"
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
