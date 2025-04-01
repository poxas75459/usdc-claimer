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
    "3p8r83b1qXxwz9a4yTCBLPG2ZffphKghJAUo2yxvW4qsSfEFu5ScCPPNan1b9MpTTi599bhvxvjUcYjtpwezWNua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Z6JSm8YV8TxLKpgn2sJifFtLbDvStPsj6Hk81npxod5kmcNrzz1qym8CpwaVSDvKnXqNwxWiTc1VHrWiCSTcY1",
  "key1": "3vekuwrGDNy4rawp146GrUfH4cYEQrLurgs8Mdsczogpx78Q1sH7izXKNy9osWAqscfUSAASJXd9BnC3qm3wKhLg",
  "key2": "3WuxxGc57uc6KruC6NasFNCDKLX4MgTweLEbmY5WquFhA6HLmUz4kTyuuEUYmvA1r9YxtBMafd8iSHXezCiQFrif",
  "key3": "3zgQKgAibHc2RyfCK1a26biGKE6orPJUU8dEDwJpRhq5sAHnmt588NKBaS2mbeJG3T1WXgxT559cFu2EVQbuRgcY",
  "key4": "2ZGF17Gw5K6gZuvQkFTYjADFWGVZRttHnSWaku5ecCdKyxMFb11D9ituaMoBLUUFPjP91912j3sx7WsamzDggt3q",
  "key5": "3n24PoSSMEKEknEeCWdEnDQEjn4sZZrvgu6soSDYAyggXAB11m7e8CtKxRzrNNyfXwBjA3Kn4WMoqsPSs2BVT59T",
  "key6": "5AzxKpAzzJot2hRgVpunES5WzxESYci3nFHAuNLEZYhtU7TWiBW76xN2sySWZH6PtyP9nBRQX8EbpLbMQL4Xxxzy",
  "key7": "gUm6Lardey9driKHnWPCh51vcCjHoJrom4AJvhAxGdDPGx22A1vsRhSBJ1oWd8whEaQZYXSsMswfVa4MaGzZRmY",
  "key8": "2WPbrZsK8LiHRAaQ22RwnouBBqUpfFJfpH9JX3xWbZnUHmdESBi6kKVX9QbkFk8xAQ5V8tJs8BGkESJeS1jnyMsz",
  "key9": "5xYYbUsFsTAv4dpJ3w3oqWco5tn1EHziWSGAVhkdzG6LBuS4vb6HGxRN538MpZAPGgAzRGR67QzzR8hSjHnCxNHm",
  "key10": "2qVAqTApmo2C9rytgnVPGkDj3hNY5AyhCUDe7ew2AuJkEFpKoBy1yuf2aP7MHU29HnSH5KKFu2UUoxisHkvvHLM7",
  "key11": "3ifDoDY7wuZcNJJY5VKXW92yB3AMx4iPbHo2sFY8VxEoCYbFtf3pcfVrckf48oc5MUYsXMQLex25fsz1jvNNDebm",
  "key12": "3MeWuqtiwjLtYSK3nU5ZxTfaVirTvaV8WX78hKnzjq9966JCL5zGDCRDHP1u6rPeM1QeJ9iW4sVKQ42vZzu5iDUX",
  "key13": "4Lqoz6hSiDHxd22AEszsNkykCfkzyp1s9LBixpXgritRLfJiuewgpZdPtLh7KhudoUmw76tAjLRMAAWQEgkz7LXE",
  "key14": "4y6uoqAH59wu3XRxddDmLqGUVsp6uDUfQnSjeUNd3FqzCCVHqvS6JiUoaGd9HJY9M1PJ4ArFcYgNqjswzwAan42o",
  "key15": "5GSagJ7HExNRyj6zRk9KU8zx65mnjg76cgttLJh4o9tEHVn8H7tAzcPAzAB4jAqqsRh6UR8i43QG8zQ94P5QNQVN",
  "key16": "5v44Xrsvw6xVJ8FefeLRG1NKV3wsGAVQ6o4koHdMP1jWRty9GnFLfRkfuMBGresX1D3RTrowcAz4ZeERgPWu8XJ1",
  "key17": "5RaUViz5P7iVEgSqSEyLzxZ5fAADsUe3dtbWLWY9JcqC7hYwbCZjZBDhPsXDwA52iEWzMQT8RrmGtS9LoEQEBknH",
  "key18": "2cGHb1WKxdCSiuKynYvMtGuPyxEGCqp45mWL4NZ14KGoivcnRjjCvqSncGfcrunAw9j4TsvKSoBv38NDozEGMXPR",
  "key19": "5JEoByt6UzZmkhPvD4kZL3MA9cxyKD9oTZTcZ9tGCdKePuVM3r2A1HAcx84tdzza4nLcZGsY12Zr43FGtviFf9sx",
  "key20": "291HCgU9PhZ6oJatebpno4JDU3HQ8p1CU4Vwj8gNJmRiHoQfEJ11zREnKX8VgiYbunHjDguu5iDaLHQ9B9jzqe3d",
  "key21": "48UzvarqCUzxzJuAumaHDK4zPJZ5ENNJUqvLPdYwqx3rofWhWg6fUvnds9YCAsKfEcd67fL81qix3dyqSyvYd2TK",
  "key22": "5s9GsonEEGVzMpFXPA1swgUdhUqkTSzweo3DSzYKMSrkqT5STPsRpfTtBBzqzfRHnKWpYjCzDbLyUAzGSJFDtNHR",
  "key23": "3sjhQUiUcmSMo4LxxD6XYNfeBF5KGwFg1RTrVGCTRF3hnmtkNcBCzsyyA41gpkobn23FCkmG49VHcwNXNnABkkdN",
  "key24": "2i8BcPV7YofebvMWPq2Y7S9dezfoKSNBMLG6wJv9qaKEWWKNtvYYzZPKJ9Jgt7gxqE2zTzyLsMHdBNuC8qcGYYy8",
  "key25": "3wBCbAr7aYSx3SMB3aUeiCxUvo2PLu3zZkWoZy1SFzmfsQf7ngJM3M6m52yVKWvKML6vGSA3cGy6MLrNexS5HZJ8",
  "key26": "5oCcmNHTB82LLi3nhr5NRT2uvh2gcufzVHkaEPYDKsYsm8snKC47VT8YnTAxwURGi3PGwCUW8Jhx8aMVSphGyhAZ",
  "key27": "2oNnGETsSDK2e1Kx4cboLMkqb56urTi4UMSY3WyHkQdrByA6L8Qvhj1M763qfxmKak87jW734TX6GgcEBRYxXPXR",
  "key28": "4jauwkE3ZsommeaNW3vabxroB8nFomqYMxnn8MCdfpoK899i2bQp3XXrfbTdK8cvmSwLM3kYG8YdYDjBkGMMmQg5",
  "key29": "QP2TswEwTA6bFuyf3jNDaGmhKr9JLKR12JS5CA6osUeYwF4BJiJr7eLYjNcZEpH5Dpns44dUGsHKaCtNWBEa9BY",
  "key30": "bSFWL4T29EoDW1xSjGR9g2nBmD5WBo737wzrRQJXmreP8ec3QHZugaWLtD3QAVNMrxNKofQN9SYpdfZ6gHsH8DA",
  "key31": "2wSRRKEo5wmGogCwK8LjX19QwAeAeBXqiA1x9cBymiSv4Ej8nYcvM2Z4X2QAh88s6zcAdcqJmHMNDbEHLwUTksoL",
  "key32": "3aqGYEbqBdGR5hRargV3HuUe2w9UTSYKCqcxBsPwcAULRREr7g1LxRLA9P2Tc9z3Ht8776f4ufmSpnRYedmzdM1j",
  "key33": "5aFXZypv6jTQg6SxWmFYyW2X6RTsVeb551c9wCr6oNqxxqcBRfk53xZZaibkivS9RWj4F5tBs9AQgPNAuLg8bMqG",
  "key34": "4hHSxVAqJMg6tcCc4WqSNTNdqRxageWS1YYB4KtEnzc2xv8EPE7yV8gSa8k3X3PcWsqWdUHx3Aa39mhtVKTVdpw6",
  "key35": "67qYFHKfxNf53Hhcosz9DfR5bvdBt85Tc8fXaejVkEciuwYrg1BoQBec2fAWfwwRhxwkxmr1xAz1PioGxgSeD4aG",
  "key36": "5fpXjauAKTafprRYAY3syEQM9u1yCUXp1pfYiiVBkHZf95mEKxraMyvQFfZa7bXh8AKP7rsD9UiV7udqucFkgy8h",
  "key37": "5mi6bKfgYVPtc4gYWVft89qSrtsY4gfMXyi9VRs3hykmEvBsoSQANUkiSaM6Jp3T5C6qRCkcbHnBK17zodrPYQLC",
  "key38": "3hLmnTNu278LfAA4rG21DG2C6Z71dHPaMFSc6ib5rpgrYUe4rEf5uoP23aqC7NRhPj5TkwUbUFhiL4kGZdgaFDmU",
  "key39": "u16HhxhLhtWgZsW8r4mcD9NBXdoUuo4ALrKZT5gtAHzi6vMaTwch1XvaEjRaADycsKHfyUhxgVqQz84Ren4R9EP",
  "key40": "ppUsRKKVhZkhAGFbmXJaegscWsQHfrMqseh53hPCb75oFUBevKHoyeHdkubXtvhmgxe3yJjuG25oNv7wKu9t3KY",
  "key41": "4LG1WUWCTWHnxzzg81fsBM2dWE3i6CLv5wAeieZ8NeDiybUHR2C8NF3ffV5pV6s356kZ6WQnivHJFauSfGZbnBJ3",
  "key42": "2XqBZy6ocbkUNcnS4FKFxfKd5GTiyjvJft9eJCxnRw9tL2Thsub4QRogkWq2PQbvDQ8tfHcyfXch3Vg4JBqpnfnM",
  "key43": "5PT6d87VkZpCMuJ5Gdswz2kRJ9fE6VN57utzdP3kPxGrSM16ZxNVQzyFPndWBoTdCBaAjXjzduTbxtKW5YBCNzfF",
  "key44": "4o6xd2BqUKbhPouYnYivHLCLTFek2aMXzpexKueRBDkrq1tp9LuVaciNRHGrLea5Dywp6R3LzbPEhu2JFWS1TEqk",
  "key45": "2UrnTAWVxN9YpRQrUrb5x71Jc7qWndcXemYDnLWcfW9NiDMFz7t4F9VLpXu7MTLCd15ZmzagwGaz22V2xhs1CnB9"
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
