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
    "5McN8RzCYGmrc9TsfhSpHXVMMt5n5s3KeX4zusfocsBX83uM4rKHHc44BtpJcF147Cz3p3Qt6w6LiCGBXqocERsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mD7n3LwgM1GiwnT9LQWCtaDnr5uandMWw5D23QNxYqEwRX9MWY9UvvwccBrjtGRuEy1xbJNSfui2144FFuvrMqc",
  "key1": "418DCsWVo4XP91ydeQow6J7ky6ixZqmc8kXZSyuguuP933qvxMwiBQzJHg5y1LPAPJmLkvwBEwGvqtr8en8PVtWk",
  "key2": "3y1RpWeZPsBuEki6wBFmqbysFay5KJUETFhozadFMuAgS6L11JXzd9cpDRYGCteBoYQ6sUZRoPcDNLQ6RiCaZKRU",
  "key3": "4wLCdkkfHVepeKSzsHqBbZRs85r6ZRZfdSdZjibyPzZvfQqmATfTtyYkjoPrCUEiCF1WkacYTBqpkT2DYNEtRhgT",
  "key4": "3fdA24KapGnq9UPCNccSPkqjdbTqQgQ982QqbmWYhpRSfFgyFYqvKsiFTtSWv6KpdPEp4nxE5LpaCFWiQC9LMZDw",
  "key5": "53jRhc7dhsdcNQ3JzswGpnzAGsr9KydxiwedGDB59TVDSb8p7vfssiubxUiWLjFd4Yk2kAZCeVwLK9faoNG6J3tH",
  "key6": "4FUnPvgDdeoC1epYyHQYUqbGpTra3ApJhEsk59bh7FB8mCagn6Q6U9cPfj97gnY2sc8YVKKdTuFPcgeZr4PTv7nb",
  "key7": "283tP8zcVoGqZBraRw4PUD97QqRiT4zLRF8PD4UKRaRa8rLmQNqW8mCeB7pCbELy4QyhM4WeDcHJyVTy7WUspan4",
  "key8": "2hUK4vztHi7y82RESEtdBbAT9EjKGJRDiVFmmpy2okULK2BJNY39qAmiH76UZJkMCBAHp1zPAJJsUMAWEkQDnqfx",
  "key9": "2SVoYJwStRREf3XavXEhVN9KpVGcSDqj57YteNf8QcxAt4iZbwQJKHFPHaUs72Uwm6Ro1fhTqWd7GVanT2T3X7zN",
  "key10": "37RPfzaAS9a4nfciwMuHR2m8XyyekynHoFkcgCvaiDsUrL9HaJPHf2PQJ1ijfrH4CRPku9PXmxQzVms5Qvp7kV1v",
  "key11": "27d31SBFEqq3SCvTe5zfmUsVcLEpmsGwxFpUzpWM1MxqLga7pVywrpcbzFTbRBKmLy2Rh7Jzkp6QvXFnCYMQwHdk",
  "key12": "sMQzFoHLnoY5QQ2KwtCEDw3u4SJKC9FjMDo4ygCTz8uaGX62veQfHsb8K7HD3NidXfu7RuVT4egAfxt8aHSLYkE",
  "key13": "3YZAu6iS6jBrtEani2xyGompNG2HH1cVbUBArZFof99FLSi65WPA6QHdoLcXj3SrKypjx1tJ627uqfaNgZoDYdU7",
  "key14": "3tDqg5M2niXojyBa7wrPuWvpGCrsgSu9gaYii1vAXSsP8EJks4N4k1oA5d5Y2FXg3HvbLgZ6zq3EgLZ7wgdG4AxS",
  "key15": "4JTbo7FkoJfXJNmcY7KNnnLYFp1tLPk91bQiR6exrXHFJ1TZSL3Wf8nCdcQPEvkoidoD2bNm24deYvSbkLsct2We",
  "key16": "121g7ws2iwa5kTwis2ZGebY38xsVGSN1rVe8Gn4raaVGWAgbjFQZRfnU3wgznUTAbvLeG4BFwjcd8bixDN9VPVFT",
  "key17": "5xNukvJJmBrdGw9PzBnZE7xzi6fxNcXDo4RsH6tdDZaJvhkeAQWxV7UgZfLtPWd5PAgJM5Bt6ngcs4EpWA6QcL9S",
  "key18": "21aDboc9kygS14rbfF8JB5fU5q42ngUFTeFu9ikakfvaHDmh6QcMY49zXAKY4pLRcr534PFZjmPcxm369AhwRFFt",
  "key19": "67MxKKG9JcqX7HshUxtiWM9fGyWxD11SvonYaxka9k5sGQkPd1HyhjzZH5RcVpArL1LkjkZXsVxAmEETKqsPZW7r",
  "key20": "4oGBD8aHNdVYpgAw2j84Xz3udZfwrQocpgcw2SSaeiQ4ePVVkoFeBpMxeMVNZZNGdkZbTcMLyTWuDHHUg26XoWZN",
  "key21": "3LPeQXEDvurEvqfJyuykpgTyinjX88QonQG81e4gshuMzfj2vbRfz4jhkR25ysuJ1qUfbuLGw6XhwwpZ3wVoocWr",
  "key22": "5kG3yAcGnqexjTfoBSHvcH17DgAR1i64HM19gQic8qQiVuTKe9Rn1CfAGWbFsUMA7LPxyUzbzn9ePUVBPBdmPVek",
  "key23": "4AnJzVDgtVwBUduYPegTNYwt51ppTciXU8vUWfy5Ba4zFJey7K3w2jCE9n3pFd8FebLtZq83ZSVpVTw5JVujXpp8",
  "key24": "62udda9bEiPKQucV7M1QVExNexuuufLURQDpPcL29sfnSCgphNAd2rRsKw7wSscq7awJNFo4jR4FttCAgnNETFsu",
  "key25": "2GvUCxfs58oBNNNUxVJMW5Du8RWQLvWnHSG6pcSwzP1WXvoL3cKS7uj3wSkxu6n7EfeKrg5wHstr7stSto5DkeYf",
  "key26": "3Eu5FHLo2TCKbdAhhxiGZMUVKoP6yeDDiC8G1mohVDDP3dGyxK5acjmiMXKP1KsCyKw1a6MrYzA3KtC8YT6RArDi",
  "key27": "5g86s254rQwYR9XxaUMkVcwg8oDN1midGmGWGpCPAsYySiRD36DfANkqSzuxRaNhbXAXgASwnEaozB52J5kNGbNy",
  "key28": "3uVCooiYeeyzT46H5Vq2utLyKT6BagUERzHrmfr6hdQxAJeJHyhJfn6Z5ZabTgDNkkbL5SBBpMwjQKVCDrHBhWJ7",
  "key29": "5XbYxscW6q13g8P9ipSMWeCYLStt2GtxBgKRZCbkwZB1QpzMv3UKr9MmqRuC4C747Vy3fyTaG34FonSuNk8umvQc",
  "key30": "2qnV5CWFX1BLonH1KGTP4F6hYhw3VoXhnsSbrbD8RkNGPZBbaGGPLLwhycdtsxLfrq2wK6RHecs31SqGgHhtanK4",
  "key31": "2wSj9R6YXhLGFGUrjHMWMEEeJcNVse6wKoNjBibA112L8xuj1scXRbzTaven6SWWSST4grn6T4bFcpakHg2wX9RE",
  "key32": "5zfnxu4awRPMMyRw3jqyb1r4H35JCkNS8kcEuTMnRVUrNnq1URyqcfweHckPyxkiKEfZ1o9dh3foivvRAtiV7A8C",
  "key33": "4k6SnN8YZKrrZTo4vuyWh4mAkSfVFUKsqQDGB9CySK5USeRpWCKVUr58Rk2Lx425LK347NrJ5QkGggHZTrYMBbG7",
  "key34": "2oEmWDhz3x2n9PgrDBPBKDQirYPMJiqFSHGj1utX4ooX4BcuKBc1NpP2QkLpDUiqcM4RhYk2YyyWEwnVKQH6o12Z",
  "key35": "21mM4vKWoXafnUkV5Tw3aAGGuK8MaANauQnWtRhJxk6ShLQ5c9yejG2ZArwr5Xb3bNFEkvWDeianvUWigk2VNNWd",
  "key36": "3wcrtTbm3BiZs4ckGKnAGVvWLP6dvvB6TULQEQntPNnu8L46vR8DiDwm8tXaLc12Yxbr7Hji6KuWF1fauooKyiL9",
  "key37": "4Tob6FQ7jgW9SovPXhCKYjHQsSQTBSm37aAQfrgmweCfBQ5Btj2HUuTM1VBZLbySyktYpsV3kkgAc5ZzhGXbEXp6",
  "key38": "34j7wy99oB6Q5aPyA6Q7v3ySCdTtec9ZYdnkKd46amVTdADJHvHrJge7wCxF6CRpTLYk3DPvJt374mjTRs8yb9dP",
  "key39": "24nhyy43g9wrH77LzM3AkY8YaPfBrmszsFhpk26eyumYpBYQeVkHuRrLiooNMpjuZLh4Fc6aZqkUSTZqSiZLhDJp",
  "key40": "4tpcFn8LCaErj5e1dokw3vLp6BxERYMigvYAKCnQBCrkna93Rhjd9uoFksQ5j3AeofYZPdnakeKXvhFq1qZECh8Z"
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
