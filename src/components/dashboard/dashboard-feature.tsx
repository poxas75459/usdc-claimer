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
    "2oa952mUa1feVW3arauMNURLpUjKAeEo317Ek2SDxJUCgvG8UoZxCECvTCQUSPbuidtQko8QAsNaJhiK1BF7gCpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWKm8KSRxbesNiHuwRVXVg8yqSffpnxn5Dw3v3MypRdZrxdF93GVcRTePCamgDbTNmucVSSP4c2JnE7hJEk3iUh",
  "key1": "5ubVJq76xcpNuscoA54xMuSZ63mqVY3fcR3btMXWWTwiucH87nMR3HnumC9pv66uuvr9BVH48itGoUj1o6o5inWA",
  "key2": "2GzcE1MymDV1kwbmnVPArGzGxaEnzcaD864JTaVMwZmF6K23eNC7oP69HtbSjZUHGnPTa29MoRJXVcovMWSRbBAT",
  "key3": "59VntHp6fJkXMCD3YK9n5Z5C4w6eX9w5jM3Tse6L3n3TA4eSipZ9FDBNSJypCGKsjCJHMVG3q8kCvrMkFWG61ipK",
  "key4": "3iZEBR3PMLgm7Adm8xDkogqB6iMfpCwUBkBSzHbCGbfCiB9YzMLqZJCF9r5aqTTgve4ziYBV2jnibE9LUxVyXiaM",
  "key5": "38n3biY6q7KyX1GaD8Yyc3KMVHsqtuBT5z4KFqJpY3iviJJZ92X2995jZDLQeuySrzLPapSNuBbdyS3PA3VpW1E",
  "key6": "61c8MkSdV4ZZvvAiz8S8LfpsHRAjd44w8n13Ecp7CaXqwVKTPUXHgviZUDRfyRNMePDdnyuWTVF9mUDsD2WTFDoE",
  "key7": "2fiDKnj3dDy6GgqBz2VZn7Fgx8gPy3bJ4LMUJK2WBAWo6qLETMk1FvSJuHA6TLDMosF9fcFXx38CJ3Bf31mqEaug",
  "key8": "4BcdMBXMxd4EBhrjdu6DKHjCRny3sWg5fkS9kW6SrSVPpN4heogpdqUiUnMKa1TD6RPDkGCadnQcSWcciFr9bAL4",
  "key9": "629C6UKsyLrUWh4XjycmRA3Y3tMmPAD3XqKKATT6YWFyy5oRgfJ51FArSxTnguCV8MtkZfwUTHPQ17TMEsFSE9iG",
  "key10": "2Agzm7zEwHe8RUrbNB4Eq1QBpV1B3pMHwzRNf67SpbFSWx9jJzzr33ML7S1EQq6cvy3GPDKxM2NKqdt9f6scKRvv",
  "key11": "4MRGJpsKm4HSy1UQd16crTfbx9LH5FBg3ConhEJAGp3y7r9qvfuwn6eQh45wHQEqBBpnCCtvAjxucZpkZCbNroN9",
  "key12": "5PN2EQPxkEQgZKXcCHQ2CecnCut8GpdNQAbEnzGehG5PLnnjubAWBQ8AhLZoHdmNSM8MPLJ1qmNqmBDU8VRLQBa5",
  "key13": "5QPyQffuH1Uoh7BbKdvo6uL7XG4dNrT2b8wR1qGkDCvNssn5Y1ebRB7hgyzY7nyMkkhhabChAro1msesXWbUaB88",
  "key14": "58D7tE7kPsBWoRQVtXU5xMUbpqb1bFCHsDwQrV6x9pU9J5F1ReA4XVGNkGYssjTfL5CTQJCpuTY99zyPbArnyUxc",
  "key15": "2EE5LkYTMg6x33Fr11STQ6YQaqZWA8SVHKEFQyRXpTnue69jtn9eVP4HeBL5CAof4DrZV3k7dCXmSMM9tngSeAur",
  "key16": "S49cgigE3FoWzJH16gwyWMGMQjZVvYR7BULqXt9hxgz8tWQiraxgyzKh7VZa4Q1p9ApGcqUXqbbhyT9TLdZbjof",
  "key17": "5adDShrD7XdYBVK2u6iP4oA87bq9kUtndWbmjdG6yQzWwLdYt9DyuYqzKzMGao9Zt9j2dtsUSyLcsRu1Nwdkd7af",
  "key18": "2xjgpidvfNbJKiR2eVbo8L79JHp9gnVdoX6DujvjPnu37GikuYhietTbyZxZLdgGJSct5E43kDY6rbev15mYRHy6",
  "key19": "45vPhARtaB9S2cesBTgfrRkhedb5KWkknS16FuNw8Ar1sUriuiRCiWTfdAUEiTk8EHsDGJHM7TnP6zUiEe5mYRf3",
  "key20": "5DtEX7XUxvmbXLrmGQqvu3B8Zzw9tHT5htMKBXxBAm3PQse1H9Subx2tW1ySfoTcs7tRg43egWzzgRtDkwo4EJbV",
  "key21": "ByKxVkwwYeqvHrM1YHNC8VxPHPt9mnJVKJpoSCnKh5puy571gWSNWQeqbwjLmPH9eJzcY6h2Eqnoa3M67mhwny9",
  "key22": "32UR7EocBXEngSpmsZTd1CkZENGDpzVpzjA2rn5pRjfarEjEfLkGeD13fUiMi871ugnMHyB7KnLZtNeqbsUdf2RD",
  "key23": "3JtDpqxhniaHmrvFE2ZWs99WWwEBCTEsqE4LriEr6kiRdtQNhjkRccrf5JiES6VVhuY7zyu4rC6GvFEpweYew4bc",
  "key24": "5ncXm5m5eW9KbMCaT7q3vTifGhMVFZgfu4MjqP2T4SSuHn6PXWqJJUfqp4LcHzBtN82sTbfrZSRpXh4gA1XDPbs9",
  "key25": "rJDogNzwNuGQpEL57kKLLxUszQ5SeCNkwQGTXhKxJHRhzwWGXNXA13Lb6LSZdunv6mEtrs27NKRXz9ZgPXckcmB",
  "key26": "4hbJW8bK48WWz4H9i4bBc3AVrTbnAfVhKYniUPJufxf5GoNqW9h2UwyGqJEvHcpVFtP6hXsSRGzHCiv52rCxh22H",
  "key27": "2kAXHjdtS3kTDkSM8fsiNX11F8PVMRv7eDXUP4QRzE8xw3doSoS2dYzteewZVMTRp4cJ28RYvaFVsJMsTD5G3De1",
  "key28": "3UAacv4hW24TY4w7xwkCvXovaPaFsxh9mA2piPW2qKbCK4TMDU9Zwy9McXzCBvvENPvnJtpnmW7VANDXex5bPgzZ",
  "key29": "5g3qsvo45Vzzgcg8C4v76uNmUXQitcaiT8tMMWdoRb69SKJsobqEpsW61F4vWgGHYd6CLtj4QZPVqQY1NknLKqeo",
  "key30": "52uH4Cj71ddPg3U23o2vnCvbfU91oLxdRLV1zteRpAJKM6JAsTj62dvarv4EavAg7BhTZ2UBYS2ThuStgMPXk4S9",
  "key31": "3ggvASNDUkpT38idfn9aTMwnwNe1xmJvaBQY5TtLkcj8PnDi51m3pcuig8i2tPEeyTdBpjqW7BScqSwJoknvniDG",
  "key32": "672N8qKBXmyj4iaAcb71WMFyixbM1Y6B8S59emdjZQCWa57erFcxhn3qgvzc86HPY9skyMEPLZ46qVc2VMvqhvDP",
  "key33": "34TwGWmkwE4G7MWeQAvt3SqaWkbURzNtF2adsAUGmb9buMCC6BPBMYAzmimb8XNRGquJNzEHRrju6JnHf3s2hacY",
  "key34": "3YXUcrWZjTVWJQg5Bp7zW7C2JEPK7ojNzgk1DRDPcBLmvSMS5rDUMxBKXznK539RHqjanHK3d2Bz2aBnNKW8A7kD",
  "key35": "4mKHpbJupRazhQzEmUrTMhtwekksUy54zsQuC6fWmSkWK92MnpJDR7mQ3CCRQxVQhCLf52Wq4XEFPnyTHQ1HfH8D",
  "key36": "4JbjT2tJ2EMTfpLh3Td7NBtEWUmWvevAhnNZvEVkQpfqSyjKxeBM6Q5mQPZy4gUG2AYLp6f52QS2Z7KucaPaPkzj"
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
