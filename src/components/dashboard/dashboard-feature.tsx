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
    "h9uoKJ2j8aW5DRnpeHfHBKbvrAFmasbksUD3kCJ64kLBvyuQ1hpCUNhwgvHB2htvDdbanTLDykfrGzcaJa7TZsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZ2kdudiQvBt7HfaRgUT6UjwuEgKNFHcgFq7VzSXyW3xQhBFBpnHU2cYQpFgKo8zDGX8DJg9VLY5CrxihiVcPyx",
  "key1": "2ufNcw4bQ96prvnVn2CCJkSNumWsjrk4mkEXsyFscvBexmHyL3BB5Yy2HzrE4WFzvRUKYFg6a34NBZB1Cn56SrhH",
  "key2": "KS6F91PkoP2r6MpqP2UDMY2y2ANjAuhZEZbmviHxd65QCmDaSC1Q4BXbLwwwnBi4rZYrgQsSd6yxcb9a8GtR5gS",
  "key3": "4c29ddatpb67hMy9iZmPiRFtsvWizu8VFC6qK5cQtJKbVHQgEXLcQajL28VTKYo9QkJJ79LuiGHoYmUfwtBCKP8A",
  "key4": "o3hwq7uJW9MH7C2KFW5GhvFzECQPKKMA73a3KVKM2QiShYHHpHbAYBqwV44kyDevYZgEdv7XJTCwJCsjNAqdGhf",
  "key5": "sZc1DeXBviMqhGG6H8Sghj23fbPuXb5dbPNq7Ek6WCZ2JNNtkFRjYkezTx8H39kftYhLR1gjDXerS4sTd1fvNQL",
  "key6": "4VDHeQX84ve2xLuerKaXGNdaigymePayEMCAiz8TaWPF3WaZxoD1TnEqBC9oYkfyZ9dhi2wYCwiVrzgYm3YGwZGs",
  "key7": "3wyWrj1Z69qZtNakwqPqhVG9cUWZzmePeGSE75C1Av6jxkQYGuox1YEso3Db3Jno7cZAZW3VSr1ou7Ba7T1AgdJZ",
  "key8": "4KLVunUAkxNFt78iRrerHuZFte4Dg2dZDs1snX1d171WjoZjMxxMPKvx43btoAvX3dTuib18Uf5NGfSWF9nostws",
  "key9": "G53JB2ijywGe53B9EQGof7gKP5aF92bAoTLhDdQ1r1UUacjwW637DwLv22Dy72o1C5Ai8PJUTyd68tDjheT8HAP",
  "key10": "4ikJ11TAFzzkWvpm53mDnr93tx6qZQT1EeFtdvjF26UCU9ymXt93LyWh9vVHq7kHjyHL4UWwBJwcUDhksmW923QF",
  "key11": "4HtW5ZgH8uf8FpCRVJGNLdLNp7ThwM1Q1zrcgveMGREUPp4fWV7FAbNBo1TJxVL87UT6h3c52BJGKASNRt1Qvr9G",
  "key12": "58p8PCsCafCen74sHwfzzj4TByAhjm48nAAUuSFKYiqcSzW9mRuUBs1GFLbw3uDLvYQd1K54GCbyjFvJfhqyixHK",
  "key13": "5Wg5Vy354Bhw3BjmeY2UXio9W2UPv1fNCqSu4M2F8wLkpTKKt4Hnpww6WJWx7mvJ1pBApARwb2tbvs1WXFTJtxFn",
  "key14": "2q7o31XufTgfYonDRnNmshBTmG4idLF3r8bU7CLTDXjnwWR8KmdUQYFyAdRotqz5BPped1BSzG56ee3gtH8J6h4g",
  "key15": "3ku3uYgnXDSGXrBJGkTDrttdKVLaeLonE3MqTutCzD8i4hwMJo7GUniA1m3pafQDKeXTRx73g5YupX3Xbd7cdw3w",
  "key16": "4rns4yA17oEEXRzzXGRig3UzMJCHvQPnVZnccnL9QuwQQm3fN6q25VGzx83HmQnnAbsEr182pGeQkmwBM39jLtEs",
  "key17": "4zdACnyEQVnGzuUuFNrk7xKZGc9w4aqHJqtDNXC9Kk2zNgbcX2jybT12xDLMjuhKa8m76iUEKCV68gKKibEFunju",
  "key18": "z6G5tAdzK9BooCqmSDh9CuQxMuZj6GanGR3hanLgYLrN6QexuWUbjT4Peh2yCJp9gS3usfHQRF7CGbfDnENmVZf",
  "key19": "5oq8YYVctVsn2PwBvJugw33qBJCL1vK4E3Nd19K81DB1hbpdLuoqiGyaRKDcbs3XyLP3TSVHJtdmRFZVx1UVvYtH",
  "key20": "4yPcCRAqbSHFBdAWfUDYZe3rbZ7WKSkKHthMQb5svYca9C7gQtNh2715VueFm5NXQrJKjCgsmnNXR5WEphAZUnmS",
  "key21": "4fm1B3u8gFmCZjpi3KTCFMMwMPEYP1uWeAbhNbNAdswR5GXqEdfttsUXt45o14GCcQwoLbywfKr8sEEy31GPjsCP",
  "key22": "3MBSb52SxdTWr7pyWWUBWVDQJr2YUSfiDVYsuQvvypAz8XBD3acgmhBYrFKQfFQL5yJgFZo6YnGN3t5Cdg4puxGL",
  "key23": "MWGoNusD9ZMNnERTorjL8ZWkn9uUp9oENXXfbiM1fHbp5ukJLJfGtA8pkYij9DMa8Q1TJBX2tsNjiCbAjeYjdQ2",
  "key24": "3QoEaG2cT6KUxg11E4xBFBNpFrSJWY7vMS3BwhJ8k8xmdv9s86FUgKYdHJ88hM4HBytNcQgTwziY4VvqgfVEnoeT",
  "key25": "3Ua35w9gJzAyimSLTYRFwj5J9dkJdkF5HCFsqRVTLwxNEd7nvtq5ojt3YkiqLZdCsSs9Vy2Nffs6TB6KC7dYmT5U",
  "key26": "4w5ssmr5S1CSB1Bz1L94P7eGoyrWbWP4eDL5iwv5q2sXsqKNGoCdb4gWgPxrqmFj7a5SPKaW2ayAcwNhMSy499Jp",
  "key27": "JhfhwZ53EuirPRcWP8f9tLKZQH8sdqnM7Ubs1tqS5en1xGMpb61mVgkgoHfYsP5ZJAPPkAf1WoB3dBkE3bJsJHN",
  "key28": "46uu3DRm9y1ZV6Q3Dvs6hf1YLZrsNBGuoGrdrNhZ21xARvna8QqugsuCDoWtDbQYcy2B5Ei7eC84f7eqjSGtYqZ7"
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
