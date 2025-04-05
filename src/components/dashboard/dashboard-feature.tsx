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
    "428bJxDiAbWVvV2jw7bmz56WN9wMnN1X5WyEnvEx8kZiKJGGrzx57spUrXcpuk4QQCSZUSVTFUwuyairLDBhzfBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56n2SGePBjxDacQRbzHT7QSAmQgZaEAFp2M6eCx9RLUbiPpqnDWkkm2V9HqkFu6et9XiwTz6kejqKytU8sboLZcV",
  "key1": "21EaVorRgqinrVSrq91KerbEsioA9wdFLe5WaH7Cfs7R3Vp3m4CKWcixat2eKfogHNiPs1HzuTHqUoUDZ4vZCNeU",
  "key2": "35rFK2NbJuJTKQsQL9epg9H69Mrq43VQemgydrJnPsuBjapA3LzpE3rKoKrux1H97yHnZq8bcCsbNnFnPTfFZ915",
  "key3": "37XvvsU2Efw9YotKovUoYi8D8UDVqrQdS6dny7VjQhwGfLvmRuQVfYsEqSRX2EXZRFstPrUchnMjQuakA7bMrut",
  "key4": "Hw5ZAVpGAgfdAHxK3xdEPeaqjssmiTUdVsQRUjpDTFzQK6XZ4SkNdBASpma6DRbjruSEU4fBTA52vhjZk559sY3",
  "key5": "X5KerPnc74mrKuE1c7FfqEBsdGJsRRQqwk4sM2YAAc2DBB8CaPHdbfXmsS4MoxG5ADoDcfT7FEWGjmuxu2R36ZM",
  "key6": "56C4VbnUqtGc7A37hemxMAcMhZZsV5ZvXv5WxaRnCViVFHncTuz8jnNX9zK1PSuaZpEZxd9eJaCJ3y8y8uMazkHL",
  "key7": "54BZjARnSNCbYDGW1y8x3kMZCx2PoSmTC5A9TwJEHbjtkx4iB7K5Q1nU48vHqyYJT3AHKu3PtBVB2huijnKnJSNJ",
  "key8": "25Svmpjtxkonc54icuPrndpcfPQ892Gz3awzrvyvNTYQYwQJwQ7mzyMs2YM4cgGG4VsuZ1x4nsF8gaqpRQqqRe1s",
  "key9": "64Re1SqsTRjqmMKDQvfvKDwhfk3nsRaeXkgagTdgsawQV6zNSC5z2ChcTrEYM1EMVL43fNEaCgh2Ga5bNFTw36Lg",
  "key10": "2EwgNTFiDNUpuK57DTbNQWEEjAPFscqSCxyFXfGe5QqsWVxBZoFqvJHmbYgouow3N7ra1WgqnGHpbyFVUunS65qp",
  "key11": "348PPBhwmnra5EVHjQsgKm6MUZAg5pvkhVChdp8w2Rr9kmM59L2voLszHbuXsXchx4awoW5rAcMQpgwfagVuwueC",
  "key12": "22ztkjQLgdpuN7LDWM4zRmmknUTTuWC5wWQsntdgKFi1b2veDfrGb6s3ukMoWmAr2pzpQUeGMgrFoB9vFidEeRVw",
  "key13": "5HjWNGtKpEbUh7JDkHC7kcjg8JJQPBaqLFyPbce8taMnnzbNBZDqpxEV1UfGzFTUVW9u7r8am4AnhjwZUNj8hwvo",
  "key14": "25MPjVJhwWU5gRbctApka9E6rtvCzXk1SjC3KS8Fe1KZsBwkkDebCB1o94YZjuqTfmN1dJK3wJBfP3MJPDzihvP3",
  "key15": "3KT5QqVVn5a6SeTa2gaTnkXUHZKTX9P4WuexGSHxYskq5PwaMkKhwFiRQRArcoVwVBEPBqqqFG1px8UCN8FUtbro",
  "key16": "2zmzKuaye7cYvfn43i36SsQpypiaWJ4WjbDPNKBkhFCLRrj4YNE1wKtSNYDKDquPAGZvTz2Bvmsf3NGGxtLvYiT8",
  "key17": "3MqN8iTzdP7Webadg91G2snxSyicDwz95H4eVKMgitTQiFLWBo39q77Aix31UfN13R33aWzXGBdMuKNBcbBQyHq4",
  "key18": "hUo5rvFFW7gJx6nr28RAxi52LGQrBSVUf1JT3NtgdgAz2xdVEdPkK7wmqcfQwA6sfh2KzbfvkFGdHWzhV3L94cy",
  "key19": "4boVzt5BB3Mkpjs6EkU4ue7SQUi6LhkvP1hymyA8KW81kXN6uccAKT2f9CRpQCKtzUAeMwAKhQgRAqU3u2zieusw",
  "key20": "2BgETCy9CnfUnAN95JLszHAncktxZvUUSxJe3rGnKdL2jYpSZS798rVrCZ4CEQYycTg18n8NYdskJu4SJGvVMXUW",
  "key21": "3SSzLykU2L8SaWgDw1HAVt3eHxsDCX65k479RPE99XCvtSGKj3draa3uXXn5nFcg2wFGgXgy8iiva5GmkZyrz6EQ",
  "key22": "2xDC7veH4huaYaZQbARphCw8u4vgpRboUsHx49MxHcJZzcfGpSUytzXsGG5dQu3qesbSueU1gJfbkpW3MWrJ9U51",
  "key23": "kV2Vi3PNFziyGfeSW3PLdmcMWRpgJQiam5a8KjxzrJbYRrc21TGvarUg7Y8hGdFz9GpS5rJWrnSWYbzSNdnWaRx",
  "key24": "3nnzqGD1hmCbADotpA6pucbBTVQhSdFaqquT58iEN1Ti2A1rzsn2gsZNTe9LLnoUPdaxM342PK7FZ9Jpv9Bv4Xr5",
  "key25": "cWfP6sBXWU6jkuzPGtLkRnw6GvpHM7YpB1HdmQ9D9sdLcC6zjL8MWFDrAdhGNqoHAGodZNuiuVcpvoU94b6vtuG",
  "key26": "5V68X2EMVmfQ9DdXWNHZawyKrqJpbTEVm1CDL6B8cuiyj1366pvEHjSgn4f2YxeeH4RaFL9phNkGwoHbjXsnc3gd",
  "key27": "VoC7Dxgh2yusaLzcTH3WRQdHfujcWKJezZx97wR7okMaot8awTA9V4GyYKxYNfJnWmXrE7YD3AK9CcoSXKadS1A",
  "key28": "va56YFR31T35dYGVhEHy2V67gBcRskAjjHkyEmBxXc2fbhxtxooR4pgYyG9d1gKF9J65ZNdH1qQ87bcm2AdiF1y",
  "key29": "64UErRP1cF9TtPnJ4yVrkaq99zCgsw9knXw7zHZaABopHo3avjHRdkGWpWbnKXVe4uYUXnB2dC2mxHoVRrf5nuQW",
  "key30": "5xAvBq5LnafoDxe36pmoQowXKtQZYUQ3b6VdMj6K8vR2p8nbM3Vd7WACFqqBKPDSdfrQqxuCePc2qGM2fSgp5Kyz"
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
