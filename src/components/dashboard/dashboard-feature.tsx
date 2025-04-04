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
    "Z7AiARRTnzh9nxMAt7paoUL9Q8PsZzUzD3qyLbJT3ZiJN7xEKbKcgqeUS1hmLnC7W5e7wpsrZotzCLuopCCeU7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4HgHKeTYEXqwn8qpoxkoPBkMMUkeARLTeZrBA3KDAbu4VbTdhWKYJrXs5Bzckj4S5n2qaAaYjMBTs424uJrjnL",
  "key1": "3eWJLrbkCZ2p9ZMWh2JyDWP8VQL9sqnV4JzKnadV1aef86CSFKFdob6ULbK9HB8QVqgYzhgqwji1uk1tyvM2W7Gm",
  "key2": "27Eh3vhP7SkH9wxGqYbHKLCx1hy7c8d9cdqgmUzstQRsbAMZ8iZKCsVCMUA9rq4tP3S7uCUyDF5scRV1o1iAwhjL",
  "key3": "2qvULmArHHjxdK71CYL5yJ6iKhk6gFbr2Qakn17gfXhLEoe4mx4mPwUxMtdvKPRaQg1xLor1mjayYhMoVpjwdnBv",
  "key4": "4oNN32F6RAY7vKamrX81eZmDC4FpgpRGKVkPZ6x5KYjMTuv89Tnhi3bQjS2kE7gMdo747pd2UrwHhXaXjrTkR9kK",
  "key5": "5kHFfgjB7cpdWLyY65ZrLLYsxPpVE7GDzpDygdLCRBidgTr1bDhvKf84KYa6XapmKnJXqSB1G8xgcTDRmXzx2DNm",
  "key6": "4d7a9DJaPKGJyBE1oj1Nnt5WhYtcDSxP2SuPDj4xrcwYhetwf63H8tm5LsT3K9fLKtfbW7PqajuLR2rqR7xdg4Xf",
  "key7": "4t4LSXVws3eeBZnaLfkdJKygLCGmMfmxAKrZF2ZNzg1dSrQo1TjfeXFY3BULpBg1QXBrEygVLQ2PptwzR6WGdbaX",
  "key8": "vSQ2AhgTfYFhxyvvrJiLGYkB988afVMbcMP9Msc2JkLpaafFubkcojQssmWdD2a8syeBXJ1Ciriy4cV7LjCg2Ug",
  "key9": "4oMzt23ehrUweHB277671gRRVMiKWwM1Cm7KUiCJEiqJiZCrJhdFCW5UxLf8FHqnktxQhUDQ1jJX2kFzgChjAaC5",
  "key10": "4cJxv6Rf6hT15jYRv2YV2x5huxEExt1BQCrMzmbFZVf5VaLdEQy1DMdkh2hW4b61LiY8EofqkFFA6Ad2EkrUygz8",
  "key11": "mdHmdHHGELJRqiAXhuLRMQtrKLdN5wwHrxuG3Bs2t8iK8ktSs1eiEepJgFakRBaEAHt3DyEdJAvs9MsWdYw3Lyk",
  "key12": "3eQxsYRvigk7kRVnRWjQqUkXR3w9hWWzD8yxWJmnJFMAhbgUCu9NXpjSYtEKm6fPXAX2FTkCvgArEH6iXHczPxbv",
  "key13": "49aKDa9ap7CWCL2ueuYMBVtFvCTqvr5vXAaF6v1Qntm6vcVWYguGPQfTnA4epRy9nQyfybZqJYEWvwqEJfUnAQRb",
  "key14": "4LBeRTkaokgyjhhMp7LZa5G8Asmrm7zw32odBLBwMw3btsiAguwZc3f5W2wXiMFFQLckx3AJL78SEhy9nG5gYJoT",
  "key15": "5RfSARa24Q9LBXxEZeBN8DmMWhy8zHgesDDc1F8ZKAKtEfx4pbxcmzEiPaHd3zCLX8CJmmxsnCX74FPbwYkVYdeK",
  "key16": "2DP7KPAFTVqBEtKZ5EHcnUwvBTEAzbHb96iPVqj5RpXdNKqxUMBjiot6jT3pZmsQno2gen5bCFxWPwUthz355K2h",
  "key17": "4WwaapbK8CsVxzEVSwtd4yHbGwceHZqFmAsd4uYKXAqkPmqjbRcC5RaNY43SjtmoGABs7cHuLoJjox5ieVSsCYk6",
  "key18": "6SHjNoxF8vVfwYe8dZ9KNP3skjB6BaTzo2XGdYzDNnHgCTUR2RYbbgAdoUhMtrxoZdgjYMYugdBmyRoTm7ZR7mw",
  "key19": "3EzAG92UD9mMHLFBA24a8Uu3WGc4yzzdWYo4JgyGsqMJcc94frZ8FPKyLmE1DweUsuTNUCL5ujoPLsFKZCAupmro",
  "key20": "3MzERNUmmh5shGbdvXbpBnn9L8RVndpxLCAt36UE3ZHxmgbvLmtuTKV4x8cfo9qgVMN4ZGhhxLoT1g3B9i67fwmw",
  "key21": "5ZPxBAYYTLUFFCrHhq8d1hnrT59BP3w4uRFpBbUMJETg3xdQTCi6x5etgfMUZ3vuGaZhv4dphvqkcHCV2WRfy6pM",
  "key22": "5Mf59HJC37kL7ytzsDNyirUXxLNmaRE3xuFCm5VpQ4sk2eYM7UrhLgVVT7gckQB85geanz8XBmicd8ZLSRzGdKWo",
  "key23": "WBNq5MAbDo2BaVLLB25gbt5NEW7gSweJBZEqwMmKNwbjGVQzyYPEG2J2woQ4Ed3hCD1AMF99XKU4EBPWVXn8aZC",
  "key24": "2cmUiZ8seARum9tRgLkyFbk2ohVMLVuB9VkGcYooRrTqnbMVnAT8SLmych2BHgwRRBDJH5EXkPnFW5P2iRyp1Kdc",
  "key25": "vrKa28nEwVZoRHxmqouiZM9s6dyJoAwARY299WBMA1yo6qEHS515eyjQX4KC82iUsm5EP5q9F6CQyEyGBh3A9Y4",
  "key26": "4heQmUVSYpijpxSYi8vKcUHvRNMkhHvzSKMqCbh5wruX2jrA2BB6fh7NmRt2LeEtJdkjTm1Ux1MCpXZh2iLdAc4K",
  "key27": "e5v1uVUqoC3Nu3HLJUuDYNVRDZETjAB4ffaAawT45MAPdBxCamJaGBujH8Ruo7GGQ4PyR2uZD7NzKUebcRRHtgu",
  "key28": "3Ney8Z2uRWgjLccZtXoaNedVt3Xp6fTEdXFSjLKKpBPAUWvonrsHxJtEjBYTvHcf98aBujBtJA8cKeve8LttjKfX",
  "key29": "2jsPG3gShpPxSKE51wtYn7FcvfxRB6t9hzEZcohsyLrJYup5K1f49o6jrdysFYqBXgkUz6BFGEeKuJzg7ur81Pb8",
  "key30": "4FpzXnS9rGhPTTLGeNS4HqQH2sGZaLNxH2wP8JpeVEtCSeLbY1MWPn2r3jcgrC71XLEF9aEuLTDbbCM5WNUiDLWZ",
  "key31": "5GjuTBT3fbh7hK1dSEUXAbS6UciryvYt4RM1xZVckqLqxWj4KN2aj9Vq6oK3fUKNqsuxx8vonEUQ6aekbez3Rouy",
  "key32": "4BkNHqct4iphwmsUYrBk4ueSfaNE3WsVM8aydrb8Qkbm4wrZtDkFQfRWf6cUdb6rJ3HGvwLq1aUxiZdDJLh66Azw",
  "key33": "5G6H17jYoqwY4yrRBXf7UoothPfWPUN1PC8APyxccPvP1kZR6HqKcGSjQNtCMa2uF9AW53tjJxyYefcLZEoEVnX",
  "key34": "aGWn5TdVtV3WbPyPnbaAHARspf6WbGwRN7iRoW14RmaPFaPW46gj1QeRFfhMZMcAhC7GRuZkSkbw7NFhkqZHpWH",
  "key35": "5xXf94RifyWKK89NpsqvM8USrU3mpVPfjZFCFe4EHPWmTisxZUGVTjC3XttruDXcun4vbsVixXn8oeRdPMzY9Rn5",
  "key36": "2oBYptucLNoBk3kG3JBoo39Hs7xgd25KZRX5VHqWvC2rwsZ12wWozGN3jgSRQpKz4X1doSkvFe8cBEXCoQp6ymGX"
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
