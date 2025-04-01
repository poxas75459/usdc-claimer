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
    "4Fo357am9z1qJCJjX5C4YphuWQ7F6w8MR1WSCb8wxo5PzT8tWw9SQ9rPs3Nn6iXY325T3VsJxmx1KBdvKEGYBvw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfbbxTuLsxjNFN84WQ5btwpDX83WDc9iByGaHSSHVXQ1fFxSBeMPC7hpzGp8eBmdTX3b1hC2HeQ2spvCVGEH8ud",
  "key1": "3MPbrwm97fv5mFxGzwUHaVLddBDELDz1L7ougd1mU2KBEbsxLuTt6sdpXfE1ZMTik5xvuvJ9RbBjotnxe1njREfq",
  "key2": "2CSCbMaqW5dT3Zs3WXky4She83mhWGxiakc9xBvyco9dbKfo4nyAt9RFGe34trGYRccXtrpcuPqMmSYssnn41XAE",
  "key3": "55bXPXaEj1betzAtsdLuhH6E73WoAPLq5KP3BGkccAd9ZSZPyAJ932TJezJfDu85UhvE8T6TdUxnQp9pjVvpqHud",
  "key4": "3dMRkCuiQomL3f5zTkVGd6zaTFcaCEVTJmmrU1hndTZ5VvKSAKiMw2rH1mAcoGMawijXS6D7LqW1UKXQZGuNVapB",
  "key5": "48jS7hxjW5UMVmVCPgjFoDEurx2XGjLriFLedP4hBS8dTdr1mkadR5Bj5D3Eo3EgemgMVdSYQkQLyefURd4h2vv6",
  "key6": "bN9pUBY45PaB5hCunY69BwjXVLtB3fyyUkn2wykPPkHgnJwBHNiw7cmd96HGyUoQga2JNHEkpXNuJ52KpGnbzQM",
  "key7": "63wQAZqzgTTj4HuHjPa9PupQXGXsA572BpHoxEFfU5ocApqrgaek6JigmiHjzTMGZDeHVGeNPDHKiQZDN5gcMwJt",
  "key8": "3Uv5jnJVnS8FhG71fmDnGozXdjrGDVMVSrjWvwGRwy1vHz6aX4ZZaTHQ8WEQm6nBkFbcMWNwSAuaTcD4ikdGgs6Z",
  "key9": "5yYrt9GAupZok3bYVuQRTG5StL4aTWRPkaPBJqwsphKmewCy4FPFedTn9JVYzgQX97RFd62pi8wphjkrUmUJp3Mb",
  "key10": "3jSpGR8tHAbSKpuKGdvoxz24csmqoJVgSEYBHdhVe3TyQSxnQQBGCwGF5jKooquU5H3nqvVsuXU7MED4CTScxTg3",
  "key11": "3NYM3D7RG2RyHtmSRRGuKBWC6byQr14cxJ8oc6oBALG4gDE7FHSwoRs3Mc8d571fnwUkEAU2FhqnvqYtfpxUfre2",
  "key12": "hh4xzar7ZseUju6mnLK1ThqLC62Ajhc9PgDsAwV7P7vHRPpXhbQmY8fXHyfoggATu6QxyTT46ZpLPGh59UkKZyz",
  "key13": "2bJsAbXz4ALEqBvLhUv2UitsGChjAcjffMbCGdusmkS6yiairXGyBWQVFFREsxaDo5CULzdutMigTX6iujaVmaVR",
  "key14": "5HPtDwxLkCd9X9Vbpo8HU1RjZthf8ZJPokLntkmPa9Uxw55vwQsFwvGv7UJxQMzR7BoAWFxTEvFir53Qz9Y7bMD4",
  "key15": "5xwyB8kbQVNx6ibon4H4FtcuQHSmuRsM38V13jaUzzyLZyhTp3yAgefjCQccGBkXPMrRHLroNAKGfMrMH4TyoWV6",
  "key16": "2o9x9wYBYFF2Um4DgWqnkuJwfA7a4Wbc2RVzGQnLZz5xG9w6uyywBoDu7PwDVE9WEYYZJgJhLU7V9tVA11931jJp",
  "key17": "3ZaYC2NU9bP7dmnLC3DB1yvasDYMnk8hs5Ku2WaYe7bMcqqAmyAK2KpMcuukPWU63ojy8qj7aurvds3AUBg8sGaY",
  "key18": "478XoNHw5ZUFFjmWnLbXjZFZcSFw1cSheuanrbUNSxzBu3pCGsvBKfrnaYnvZqStqZMfToU5HsC9tUzuk5fcqevb",
  "key19": "4Pij3LeP72Bsoaekyn6wRGChKGfXLfoZuafPmeCRiG9fEyAmSvxvYF1khVi3A4ttq5rfxwdRa5xiakpogZEf3J6K",
  "key20": "5LwW5hLuAKta8NjxE2tGwUrSxc2KjxVVNjjUQ6CfToLzpqvfjBnThm2WjY5Jmk5cz9S9NmyA2CHcyjH6H3EdSAXi",
  "key21": "5kP4VELR7NmAZssWchBjWrUna8PBn1Uo4uZpxGTEKXWifZuGG2udVL5KrSfwzrMiEGcfobetHqkrim9aErCbZian",
  "key22": "8qSS8mvRsYX4aRvtPUHcw59YhrevHKrdSju9MgZBJ7qJjK58ammBxymbXM8ApY6H5LyUra7VhJmhzzFgF5f7Vd7",
  "key23": "bNfMwX6YBR5B1CrNomrsZwz7R1HJYyTY6HF3Jk29jJCLy4ooU7gXSXWPdYXEzQkYcY8frRAaWnVo1MifFsDggX5",
  "key24": "4YTknq27pxATdCurEwayMeNAZkHJpqRMXhchAMhhaaEpnPcPek1PH4u66JtQcxfqtAcvGzLrQM1W2GdG8kFkc9UK",
  "key25": "2qxWYTwTUqqLJhMJXeRX5AHAShR9qjLwB5XiG3WXE7nAWowKkymYV2uV2eWf7k6rFpAUZuMUZ6sf33F75pNAeEH3",
  "key26": "mf75qxBdPQmY9sH41jDDFknc1s2jg649px2MdVnunY32ypNFL7FoE1rnhaaRcWRSoEC1VPXyt91k8opC2B5mmQ7",
  "key27": "4QtixyU3W47E2qUHvyBFnNEu3LPWj93TDUFiNxv83VVwjxcdMvnurBdqfwnmta5fWz9bEp4BvfQHqyLGb4akrUF",
  "key28": "4ZTn4zWJVYgcgZp4rFSHdsGSuLmJgTWsMK8d9768GkWawEnH9pKu6ZYNt5o5FNwE6HqbE3rCsBLNkX7RMzspzZYE",
  "key29": "3bypiQ9PnqYEncXxWiKhCU7fhQ6nXL5q19o2bisN1YikaiDzKjbMPmkB8urpWRVqSw8b4PMevD7VHLoQavzVdqpZ",
  "key30": "43aw46oi2ggTQskPt59qAWkDa3e6ho9AQpietWX3WNmozAWKFirthTNzAMDzBy1uhKreYCfBCUez8Ujpv47qEije",
  "key31": "5iQ4uVN1bwuXr1iAmPf7wSz8cTxS4yDimfTRKc3LM4rMoLoAhMDiYmJwMaLYtocHooAdLDU8EMaFo6mcZHwQTKHz",
  "key32": "2o2TrGRB5fN91r7gCMEz3U64SgRftLG7zVW4BEGHak3TAst99Gfvv3iP8nBLSt1McDpbAYig77qGzD1Wu68Mi9Q7",
  "key33": "3MpN7C6WAE77NCsBJLEnuvqLvXc3GUnsXZKEe6p1b93u9RyBAKnZuzmTSJ9g4Mt3hcT3bBHVF9MwfFsNpqjBFrwP",
  "key34": "4ixNKRvhUmm27kic6BcF6NN39KpErJ6crRWUudDWjhmjddQk3AkWh6WDzBb9pp6jNzEFN5MX49BncSctroj7KHpv",
  "key35": "583nuP36R6pbF9ArmyBuMu2x3L3dBHQeXdgsExJLy6At9JFWS4TunZLLjAxgbLa46AyxSRyZCWCeRwuR3HCohDCL",
  "key36": "3PrjF6YUPMVN8mzhf6d22xY49MPhRSYxra86tWPL2fFurAsvkQz1wzGHY59PMaYrYYgrXPBK2CpRC7QHJBRp52vt",
  "key37": "5xwbyULuTU56LWVXYA3F2sYrYm6vrC3ymjqWbUESTeh5PnRmFcTDt3jyWS2xy8MgmqacxaFoonTe9CYrG9YUJsTb",
  "key38": "Qaaa9GoAxn67ghv2xAFWcC8WEbT247ipTw3WE3H3sBhv6goWWe9D6xHDYi39dTGE73yPp7aBuhbxK1AsdP2X8QA"
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
