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
    "4Q9QkqSVSaPdbSHQRdztxjfgqCbwRVpTzaqgWynFtPW86iN2ijbLdDdoDteFGGMqBXhhXaz2MSHvY5noEtQuwaPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vQKGiTSRWvMeybrEBAwh1KA2mS9VBbbFbH3DgUWSiLk3qU5dE9kGDfuC3LKSVF3SwCvdvXPPQcKRzvmLevCqz1C",
  "key1": "preB7EBacNb9zp5N68UEe1WQpmBL3WyiNNrYuUtF6tQDvs3uK5ZRPNEQiT7yz9LE6C7PNLaN9eAHwFKHyHosTfg",
  "key2": "4s6fVzADWrXqQTYcr6cMapEse1QMytufLREmuywQffCRQiVrCqTF9jPm1ryQ75S9DU4akc7UHao1tZUm6ek6McnT",
  "key3": "U134HPgC2wnp7y3v7nW91YAJVYoxSeTLfFAbKZoMPTNN7zcG4gDYAEGHYzbQsG8p5utjShqzkXfAGUYrCdhccC9",
  "key4": "5MokmoEbryMJenpJRkvsVgJepPwr6egn6wsysQW5cy6acSGGM9aytqmJgWTv5NajDswjAhXJH67mjDYTHdLUqBKH",
  "key5": "3BkssePx3cZ81t2R3PZTwr3KDcVBbUJw83XVi7jZdX2X2PDtXjLFxSqHDmrscqyASZRNpDXWriDLNzfSWWNfRKnh",
  "key6": "4nKTehspfuk8H25tdWszXFonUeg7GHRCfrnRGZnjbWQCBkgv3fzTNaTyhmVrRxZ61rEH4vtGb73MjAeairY3su51",
  "key7": "qAFv2a6xSTyj1evjTouV3mDSCsShZJgRrNG59armBH6HwaMoHTu9u4i5jhnRFecbAuKvCLoE6XSsBGVrezvgmyj",
  "key8": "RUL6NzERx4ciwCBYGGDU9bTtxqGe5sh1QGqZ8aCgeVLzixgnRfL2G2NGUaRyfdLcG9NGLvQcsvuaRWcFN4qexDv",
  "key9": "55ErUSAmMYpGUGjNffsoLJX1n1SVXMDZvbnU6QPTBf7ynrEmLCUNVXGwGHt8Ak6MowravQMpHTdMjMeSYKqPvT3H",
  "key10": "5oh1hX1DziV81duFhNCHLn3p1XnrSFrVKRnLdQ11S46Ti3XXJx9aaCzA1EdfJzXEXh3LiwtArAoC7V9EL4K841q6",
  "key11": "3jFpiY9kV3J4rhMZaBCX6XYebzqqpKhS9JH2saBPfRJDnAphPBTscyPBPPG3dBefU9QiWivqEnRn1tNh56ASantB",
  "key12": "2PVv8Zd92yFPAqv5Qi23iWQZwJf1LAxzUHqAXJQNL5Rxjy7G9diSARWnNFkJGfkXWsVDKxV6ruWrksvZg9LYxVjR",
  "key13": "4NKVdXjsvZBEi9Z8U6pKYQH865LjXE2A7ih3YQ5d4N8SSRMqdWa2WayVrUwE5thh9DnRQSiDx3AZyBD2ScJ5pW98",
  "key14": "D4gZ8oKbLVz72q2hLEzwAaJfm1kVc8vmXRj7V3vXUuFx6AE3uRc4BhhRWbtuoC7LMMbw69yTFpHzU2wngtS1oE8",
  "key15": "3VF37D9pjrETqYFyq61rtQXm1A8XP3M7sc3SCDb11tppo1ksJoPoy764RwHGrXQXtNyMVju9kvSEXLGRPJvpDPKP",
  "key16": "2evr3SdRbSB634xdivWSZiK4FpkZ1chhEibfBVem95cUqyLcDKW55QQfy6ktTqCkpfgEQ1s2UjhkzTmXpUWisKLW",
  "key17": "37N7Tku8n3FUjNMGqbmkpDk9HxjxZP17ddy4PcfPjqSC6gjMG9aH86vDMhXtrAG94jHTYU4DSL1ws5E3jnMABz5x",
  "key18": "5rTCdYBPDQJyLUDmXCht873FWArJ5oCXwCucxq75oBRSvapBaxHfHxVaH17T1wNCRxi1FRVR5Yv49DRCGbGVC6kx",
  "key19": "52tqWo1Y7NHsReUSqDvXCAaqnxMEgFYJXv8fEkX1w56yo3mNYfZ3xfxyVKKXrbVPKnaTVE1Pq6RLCAurSakVndN",
  "key20": "5Na5CqQowZjBZf4eLvftcApv2NvAFLtMoLDBhANd97X1ZEdpmFAF4mesKzK6ZBCUfR3PF4mMz8DGRFmuqSqt77vj",
  "key21": "Q9KoMZFnzzCeRAkPk8LRBFVsX17FVceZdbdpZaFp3vJRD75KZq5xvpGTiL7Nd2gtG9kAF6ePFEx9uTYsXWHLUrN",
  "key22": "vdjgdUTEjC3jhVzsgnWgXDmDg8cuRN9g9qZH3RENck4aD3dqwBAQXyrGgazefE8s12cGdrkZCjzTzeQbMMmz52L",
  "key23": "5MMDMfbTJwuFYHvSeuPxZjdBUZPPpS7fN2CqBz35cWYNoK6rA8doN2Dg6KyktBzP5uviBJcVhTvxqNivqvFPjFpm",
  "key24": "49M7pMiZgPfiTMeL3B5fnLMxf7BSHNiYfqX4xbLjN3NN4n3uVirozfa6o4mSbxXfYLcwxVXEfUs2cUe7tbNws2Hp",
  "key25": "3AGdo9r7PgX36bvo5bT7AmzyHQWJ5nPUUKjxNN6M1SpCRmC6gASUzvwLyQVuwdHaXu3GJK2XoGyXNfud79aFpEh1",
  "key26": "3DpgdYyaiED5nzxZafuQ1jU7FnXNX3akfurM6HYNMKguEovBYNactPoxuAaKbGsuD6odEfEVSqBzz5VSRtfxJhbC",
  "key27": "unpiBwTqE1nXihZzUmbPwQkzqRyBS4sdHVWJyso2XSAvgtmDMK4yQm2ukouoEi2959mYNGHjd479AK7LEXbhYMz",
  "key28": "4UXh3PRb518SooijiLSV5PwQDEGoetgoeHDigpEy3ZViS5XC3XfpQKM6iE7oUqkrA5XgCy5BCDLnPUA5Z3nDDjVY",
  "key29": "28CiXwxuQCL6ie1nj6ks8mPo7Vtw7MrAm9c8cn6VMGhVAg6RceiRnw1Pgh6z65udgB6AoMcuCype1xLZr19mmzJc",
  "key30": "6731Fm9N4CSwpxuERZ9j8Ttnn2F8C3q17y5vTb1vnm1omfxTbvLXRG4ZhGDMKbah9JtjdiY5xNwEsPo3KBkuU5Ny",
  "key31": "5ACztiwwGwLDnTH7MxtvaQEyafoLuZFXmmSzN53MPyaJuMWxrxSQpqNPGi5CLgq7tVRUEHAKKGEQ6NEtpcC7LPNf",
  "key32": "8d7ggvX6Aj2UdDb7JYtRDW38CxgrJpz8YigmaEdTGS9Myw8dTFepyE2QJ8WKPJGvwEXEQ4LtiuXU1YnUy9fT8h6",
  "key33": "5W3xzrdXgpnQaMcfNHxcqrzaFCt99GpTXFHazJhvxXKXauq62B8FkZ87bku9o5faH5u8YhYADWsMKsRNGxMBtpVS",
  "key34": "VU7A3ihZCHuxpiho62aWiMNJr4uD4G5FfqNkzwbsi2EqsRGPCvaXdczUWsPhZ2RHJg9C58wLtZqiYfDLXWNfMRr",
  "key35": "4M3i4sAD3hGikBeZGouNbKAJ9eefYQAyXMM6TJ3VVT27bygwiGi63tkQcJv8SLvFsYmThc88GstRxSkg2tchUTjY",
  "key36": "22K3A9UFbTwtstPaDC2JKacA43LSwhj5Ux5RGpQ6NbRcFgzjDBy2Y88hVpfgQSASiheQHfUDCNSg1cXdBF2TLrpK",
  "key37": "wA6cfQ47J6T1MtabZSQ3mwdy1cciV3jZuiCZjV2dyGcNLTiEurGscyVqQa95SCtDZefWJ7Cn7g6thRHgMVp693f",
  "key38": "egKM7YjpoLEjRzGQrGnQXq8s7qaxommsCyQ4xRXg3EeFBoAFiiLMHuMgDbVB8aLtUqUU7Xn5vcnm5hzf9NBDfLz",
  "key39": "2oMb2FZj28iLtCkBjv9UiXaY2sFSeuAXF17hRXWDH8PKaFUXeDBBAPqMbyLQ4coTSnZVg3JVWcSe2HwrD1bcxDRD",
  "key40": "3KEGqd9XhKv2VDTys2zNDVZxZxB3uqjxYHTDdTr9uHY8eZRV6FEUJyYx51mwSrk7sDSeZ7dAHXJrVoRm1GwmcsY4",
  "key41": "3rvqkuC1cr2G3x8Dhw7TDgHZ666sKX6wPCwYkei2CtUsoJ1jRx3Xx2LfnGBUD2WC5pxvwszjVWHagWmNUqLwTwpH",
  "key42": "RwDCbtioR261UxS6r1tzCDLuAzj59nfdCA6RER6FuvcQZ4Ws8Lir9xU3QqdGjHK1QeE5W5dboJ6GUf4Jm5dKain",
  "key43": "3YDz7khqpZDvk6DHxpSo6KjuqyiibDYX1qfz465fz89mjQFb8NChXrAyZUixXGAAYCdhdF3YeafvmzkoAYWrsMSN",
  "key44": "5o2YJYE4TvMQdt7KXVJN6QGjR8AUe79R8zeTzAKS6sowTi2de2Bk9agi1DboEKn5g7xC4RtLQATrFFSvYmBmEBde",
  "key45": "4xZSXtqDsWPYknUG1w1puVFFb98L8oExstZe6TrtjCLpRMNkXq88FRyr8oQVh8RVfAPmJ7EgheLpVfWme8sqmXDM",
  "key46": "2uDe6rWcToKfPVbYunPW58TMCJvyirmiLZhwGeMYt558eyaEcbNXe8D3gqJPEqj9RSV8q4xkf8qgABeTCcmKR4mh"
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
