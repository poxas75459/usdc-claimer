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
    "42eAHDW5LrwnyiVhkyPgVu4sm1ZAZm29yyQ2M1pvHoQ5k1RiCgHhCjSwtq9vJMbDFTcZR8cds1D57yNtDg6tvXDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Muf52nG33LZXgRtucUjMWkxoq18TzEek23LrR3UJ9nQu1HvYW8Dv5curyEii2XyvQsTTpXQMkv76QdjzgWsL4F7",
  "key1": "2hCFk1i8MnZYrUAp2BDfw7fYphbDCSKkSp1Y3asEfp1TgLogZ6iH4zabGcA3XzDqghAbaZypbq9PxjA9WDteLyPx",
  "key2": "5GgxouSHukd2qvtkSHBjKUahdGjXrevyWssn4wNujhst6N8dS3U1krmgUH2EFWCBNSyarZDQNRpMvoQ3jGTCQVfz",
  "key3": "5FqTLqaRkw5Fn5855F3VEsD6wzNwD13GQArAz3kjXmPL9e5yrwYag4usfAKpM7StbLuMosZpexXcGqqceHSmnTX",
  "key4": "4M7jLfMH32jhyFboouoBHDdZGoickNDhUGiTtmoNv3seyoewQ24yzWjX6JjuaEm9t5owfHPzW68m3aUVeUT6PVfX",
  "key5": "2F93oHDNSiGDfKnb44wS2dMiuGajaEZJQa5NHCAoq6R5HKDGn6q8KYYVtkmoLoY1mWEe11T2jsefocirTPQGx4iy",
  "key6": "3qtiBhQnr77PFjZeV3rHPZNaZSdSWMX632awfyQGL2n2o3sxuA2dCCbEuyKCgvQGA1cgfrUoe412B4qHfqj6wMPh",
  "key7": "kCQVnuguAUmN9fmACvyFibN46YHJNXXZFAk2Koxkcs5f4k5aXzZPZHu6h5B1wprUq1wHWfFkF8LxqncHUzeHDuW",
  "key8": "5gmJ5f9PpqRrMG8kJs87TKJWi4K9j75zKiViKKyJvwcmZwumsUFzAz9WacvBZHmdAdUCSGt4F34swN95EAePi8HU",
  "key9": "64HaeJ4TssNWE1Pisas4AcHuGcbt1DGZqNWfcaNQg8RRFNbdUfq6gbPmFbudJXKrxrZK6SCcs7eLGorfR1yeVwHo",
  "key10": "4DPDxv2dx1WXjYjpxuJiyxKBFHA4f7gD6PewwLaBeDXsXYd717zEa9d7iPJzfTWygC8PKGPz5DrSYT87iDSspeUP",
  "key11": "4NjBe7gmqrczjxorN7U56g3DHrkw66m8FQXo4h971DYPprh7emd6u6Uy1JucaAEkVPMbMrtFaMRXG8PFtuJWpfjY",
  "key12": "2qcYLuDxj1mRKywShEM751X6vVPJgih4UKVdjnLJm7n9dAdzFzgMEwMXThvyqvBzXVYftv8osa9FUqqbYxx7bzfF",
  "key13": "3WTxdSoePJ6zfesR5uVxWX2EmK3WiuHkhhB6ZU3obQ3ug3Ye2EBjfr5ruVEAhzn3CT1aeaAyeTbSRi4dUNMM2o4V",
  "key14": "33HnaqaMEUbEUBx7N5uEDLxipzXXAQj6osRvVeSHxzkBxjDdsuCr6RpBMPNRSMrw9NcSCdDhyeBgmNyp3cau7nMp",
  "key15": "5d9XkbzsCHuRAbRJfb71m4yrm96CC1YB87nuaQRXSvoPxQHVEQdJszqd3vahzxZV6gYVKFJn6nhXyZNcY15szs4P",
  "key16": "4b4wjPPYykA7UAp5jBmbF3P2VKtQhqqto5uAxe3Gvsje124nCnLX2fy4GSRFc7JWoiTTYp9a2bfWCQde28cdmdnu",
  "key17": "5QRKw3kEoQDX6txGzdCcDjqqj5Zm78kafheUU2djTU7z2f2xdkbEBSawUr5XmD7ZTtXfjzQh7JcCg1S4Goka1v6m",
  "key18": "2UwwegJsH1CMAWu2A6pVoamnF8JvMHdJ38i6B3TNYHg5yTzAJmAqNub9VymXvsd5i2wSXQQtTkBeXtTSDX93aG48",
  "key19": "5nVvQxW55HbsNJv7RppWrLs8bKpRuAMQKm54nsPHg8FwwTG7mGoWdRCrWsWZS5UauigfweVRGj2fKbaFFcp6x9ms",
  "key20": "CUUNDK8Y5u4bzzs2wiTSr4rzn5mXRvQ23P42TaEuahPnHWGWRNH1EnsKke8ePHym6LVat9kHuL1MQGD8dG3SK8F",
  "key21": "2DHMdS6kGCRigTjcCTS5jS4LP8YcksYmv3SbXdb73dbju2mB8ufFRzqeKW7Uz3SMG7awtQjdiP9poeQUBkYPVv1x",
  "key22": "4n6y5A8BLHqKDdm13zREf2GcTLyCNSGLzbio4pvGULzXemDCPWLkwYCE32uZofk1nuh6iKaDEPAm7UtuXHKrN9zh",
  "key23": "6zdK7poCNRndav6Q4GAPZiE1PiyeL4vSi1Ya9p8c4F9MUQJGDMzgStRYNiPcntsasvwu4Qg8fURrz4teNt87SQ4",
  "key24": "fKLcNwgimLYVCTN7RCYDBfCG12xXb6fqZTwDxGLzDxdJxvfz8XiPeMbKcPQ7p2VdqtAQDvWf4g8PN1S4ZXPxdtH",
  "key25": "5Q4j4EkvVPNJRqDnnnhwn27WUYcqB36r9c2vg4XKqwdgMRV9W1WQgoXsnjmVoT2A9QNS8oe7fFZHjWf3xe3ZbZ3x",
  "key26": "5GXQ319eHJauJJHQbGNPqXTRnSTDP358M5Q2kZDg7KXCqpQtYddZVemr9YJuVyv75WbdKhPh2k9ZEPqz7asD81jy",
  "key27": "2jxg3Z9A51B9u2TV8W8fseDgttSqjiwN9sRxCoq4FBeKUcfTx3gAcaX6v99LK6BRKzVkMCaVJTWTg3hAv4xj6ELN",
  "key28": "51NCVtU7XGAULwSoUtHbc5wf2Buwkt9R88VmkkUsum4hBTkmWdnpsbkw2qpWZtyNwzEdcRtBCxwsa6HL44pEdEzD",
  "key29": "5zuAiahY7dHkxUphpQkVFtBGcg2iJq14Xn2Eh8zVobnjipLABuXkw8zbvnj3xGc6fwBkNxD7fTCM87onQE88kjys",
  "key30": "42tSziAvAP1cHi4zQKZQ5c2uRa8krWFXoenxhPWbqMjQhVJZRW9LbbQ6EkxyNXGnnpM1ZGGrenkn9zJ2X9DeEiFw",
  "key31": "32xeov2KvgXuV6wiqEyJ4aSh7ks1MA18tnxbgNMF7EPvLgAS5o958KLaTeZ9tVH5HP3AGJVHtnhMZfDMs57MAzLt",
  "key32": "DUJnkaUemsyMsZpS6TfUmg7u3N54Fur89pquTWKWX6iKGadbhoUsiF8VEsjhhAi4PM6NKTPpb81p8cy48PKxNtG",
  "key33": "2rrDWebRxNtaYcBECcAUfU5FTfVzrbCccTPfvi3ybKUNLofrw8nCh21j8gprLa7qXHjJXvzrcAjB4JnDtsSuC8zh",
  "key34": "5je4KLHMvQVZjtYfim1ANj5qmEuErq2N3yZxshSchQRNZa1CxMkqrKujFfcrRjyeDG2VsBy5U6w3UrnMud8BqXhi",
  "key35": "2RhtfY6x1PCCNVStPoRb6mVxeBbEKKubacuc95Q1YHKP5H1y91yw6PXMiTRaJvCYMBGfgCwb65smpaYEaVtLHoix",
  "key36": "aDAUgwLKoR4vmBHjstuBHBiraZvv3TMC4Zryp2HZDut1jUi1q24iXaHZr56SuhCpnbhZ6bRWMrs3RML9GkUJrux",
  "key37": "Py8PG7yBhDMrkU83QWX1fEEAK53S9DRBrBZpFpgFVcMCJ8ceF34AhTQvoSVxx5pivnLDwwzqdzx1HLrf1PH7E2d",
  "key38": "TZJcZp3S88yMPjRpnEcmx6F4HaSytWePNVAgzer3amW4yLE5kifSei278cSAgWBqVNMhwaEpEnNHFBUiDxF3tGL",
  "key39": "3wo8Dp9EziyXqc3pewyZfSGegxpaX6qydeCqzbqG6j8uCfRvRpn36ZMXBcVNKNBDdg6SzSwdFMcojMPmpn83tH8k",
  "key40": "4QWWViqGTFhwRU31YiuL9TJ7A6Bro1FHFEw31LZ1kXWhWwJpPgdLTYJxm7zUYdYxHkC8uiUXCYkcLsfwsrVyVTZh",
  "key41": "4u5xdQh2hZtEpJdSWxMgXKKEvFXowGKwJwy2ndx3cSGVCSJ8iZtL7QFzbKj9BRKzLEsJXJcrRBnNGw9biqJY8Yff",
  "key42": "61oZ1QJhjyvRoJf5ZhHmAJTXoy2G2K1EYxGo21dGWiyp1xGKJSbik2ZDMyvunKiWCyYNSbsdQob7dsQVXo1v6uef",
  "key43": "1tpTv8t66veVVbkx9ww2RFMtgzoRXkaWf9s6uDRoRBDst6Hdec9NGjEKLs8UjKvPUGts8dvxCazEASEkzLN7uat",
  "key44": "33RGSdLCD3oPi3ah1cjUfHUuqiNDyBksJEjanQoGumqaPobxoNvpMWqmYKYinNQQXr6g4GbgpTuHsHGM6J2eZe87",
  "key45": "3A5VsMPrCNfq3zsDpMu35V5BtPVrCMhPrcSUYsNAAmvciCr6YEApZtiKAMPyx8oDavK8NmRux8FdF3JsFbpcZb6r",
  "key46": "nCeft2DSgSCnvGCbqCJHTZr9DG9CU35zSaKrV9yGytXH3DH1JN9T3BZ7TPxUMDHZ88Us8XP3zQKS6od4ug1D2RP",
  "key47": "4xt9GGFYstb3DHQntNAevdWMtV2WL4MtG2rz6mGPM281dMYhLqxHvpixz2Lz2gFHCG6EYrUmJNWeYhYmf5cFUQSr",
  "key48": "2bLptmYaPtT49nU4D9tRgUAzJZy6wKsC8KnYoAyRKcMHoy5wvYF6npXAjAvHMagRK2iLFnzy52gC5CYpySuv2CNb"
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
