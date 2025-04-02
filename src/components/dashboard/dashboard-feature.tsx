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
    "5z14TsJ9oKdgKAtkk35x1fR9i98izkdvvUeYzMm8CVTpimC1t8GXzhXpDGrECeREWdrtFsmkRARZBUxNWTEWW18E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zrP3p8EfhJUjBR23F8TuTRrHyiQ9E1vymLnd2hnPW225BzzFDxrdxgGojag22F8KW3y8DkJ3q7r6Q92SeGDRmC",
  "key1": "2Uhw4EMPfV4EUPTUbnqk62WYsUqDrdH9xnjMn9fwAu4LdGHeShzg6zGCP5ARyr9TZfPoe5iLvkRuqpvFCn13qTax",
  "key2": "671CYL3PtrZr8n83pavasi2ZSqCypgnw3jgm94PwQhjomNe4FxGa1JaWLEGeUuoVg98LK7UDzXUJfGqdfS6De26m",
  "key3": "yVHLZ1ZZVksUwFfFuJm3P7v9eNjS6VATtYBV5PiwLaJRN9yoiyu5c4kDb94YfkJ2GyLoXYaeG9wWpLhkNDNXPj2",
  "key4": "5L1iiuJMJuP3CgNMPvtTS7LzUj9R3RW2tzXDTXqzdQDUpPXSYdqrm1qsywfA6RAnerS6hN2dFxQ5Uwmi7QFTL7ZS",
  "key5": "3cUvKGCmTirPDqXfSm5f5hUBeXpt7Zx1md6ZPxuMntcg6cYXq6FZBx3n2N79agKzhJAQ2qALPraSKSZbCgpaARpc",
  "key6": "4zC71xetiCL69hJR7BbuSqKDTXZxvWJZ7YKJWMXELegxi5hUkQhA23LDiBEPbu1kobxT86miBvXRq7xAZUsK5WPJ",
  "key7": "4NECCJ527YWHpNdoXaz47A2iBEWLGJg31f4EBdg36q3zs5x3Krt14UmGP3L3LXNuwH24LJ5awGxyZtbNk4dVPy6F",
  "key8": "w5oX1XjmJBijRe2GnV6WMKwb5yP3FukHZbeqgeBf4WN25KH1xREU68RqsBrRNXkStqTBtBKTAU1sfvLZA1Kyjgi",
  "key9": "397XzKRXNU2BT7ypAk4uKNQ9Qzd7F2Nsz3QMf4Tvdazi7G3ZA2fwFbpSAe3argETXWRuXGCE5TLon7u7dZeLu6WU",
  "key10": "5cQo51ttwtf7MKtbt3wpHyhS6FpTciKgTusuZe8LC42nbyzkVaa94Fp8t1C9RsWp24Ww6WoGXrbNREgeKi4zw8Ni",
  "key11": "79fqRDmpQuQ5dVcPPMKqpSZ3vUuvzW4QCeyS5LYgeU8E6onciB1psBETHf1RDbK98yUiwbzkkwmNFcFJ9Y47pYt",
  "key12": "3ARhgfmUqQt8ARx3NJ9qapqjgCECp2rA2K9A7T1kn1HyTGSb7epvbetgNUyknJTHzXTkeYFj7JHkKN2XfyoXsEnu",
  "key13": "5PtJte3k5boWxaVdxzysR8wPWbSTzEgRpmi4bb4v5BSZWYdmiW5WpEPoy4Th3wGb9azLr65yoms2NTJunDF8yPen",
  "key14": "5eLqfuT5vM3mqgdhhgAqKxysw5TPtBMEdqzoNLGZLCzAsnKJwiiLDXsuTFFnSGVUT1F1FBpB3oK2ww7NEkvB9MdZ",
  "key15": "4QSyZCebEC7zda66xrRjsQbrmbrMJtV3cpAxv7KgwnXQkyvbAeCaQ53siuABzDcHpV53ZUzsK8AVriYF2cHYHrD5",
  "key16": "4awEs35AK4WHJXtvn7kbPAwNQ36pjCtuiKssjB8mghkvj2hHgyBYtndp8fq8WLNsnBBqbinvx573yH4W8bVW8C5d",
  "key17": "3TXy4BBGJeXzfbhV8R1DRCmxQzK3D1bAUYWbZFujYTpnyGM2faDSEXh9UFhgux9jCQ6qCWm8WcFzFxTShGiTqZd6",
  "key18": "4QHXXhX9dZtfXzqfBqEGoHW9MbUPZMmJ49Q2aNo3eKgi7iHK1FS15d3iNRtxGKasRXXGdyZouw1QSaESHyCDFZ4F",
  "key19": "5cz5gNWivSSMBpRX4jKFuiJXUx22x2zExMYBTyC55vxutwXpR1fY5TwrpG4x3yf5qcHtZGhBSyqHbv3piZ5W7q6c",
  "key20": "57XmLnadKXaDnPyyAHy2npVG9LYmb9L5Xqinqw1wwciN7k2LZeTNRvG3kuJJWfee79GunzhBiGn7JqKE9iDJknRj",
  "key21": "4Q9vpmy4WeMTs89j6wkeE3MMLFtWKJvGXvwt94dgds46Zfhjc4AL4etv2xEyv9MCE4n21PWmtGYsLemdpxHguTmK",
  "key22": "1YmNuZFnwAk8acYSyRE46yEfsEMoxYEHyCmPbMyBasd8YW6ADhHseuWu7YodcHX8YbxJayeoVkJ2ABnG98H75Dc",
  "key23": "2FLCfLQPebYUBtQrNmSDbvWZnmJqFKv7pvNgZWpqhiMX11MB5rTtHsLJFPVm1RwSheQEZk9vPfn2u34tD6huYa9h",
  "key24": "4obmxm5UdFo67Tsrn1shaVRAwCuCKwvgf4MbVEZ5F8XbkixX79v7z1x6BMHb1yxe65U9Njc7qx9Ti8nEVKTkGt4g",
  "key25": "2k7QUfWZXo6TBSKWFwQ5RQPgzwC5F3jbo3MjNX2uiyXSLVvTdVpD71HpQE7GQ4E1ChYRM7uREpFn1cbe2vD3Z4Fe",
  "key26": "65gJe8WsrovJC6T4A88zi8wmRF1HEXrqjE7cSHokjtgmSof9bjLFFJLu3Kb1hn1DDxt6z3Mf4VYbNT9pmW8zcMMC",
  "key27": "47ign8owc9nk3r3N1xfbVkyV5NWtMjDzvBqEr4HBCbWjjXnXcvpbG79QVNcUURR22ADf3Mp5Mx1gJUcA31BGcsvK",
  "key28": "5LpsYZV1swBRxf2951j3MrndXGKNXJAPkLotiyz2dmRBRHT23pQp4dk8yVsYMRRHheyWpiVCByGDaYdnYCN1UB3X",
  "key29": "5muqsA8szuBz6tNEt7EPSAk8FnMtxS6S3XBKBMDDDqZeur8sPqsH9Mz6W4XQ2NoUK1umkxMrXGgtBPpy61aRqMjp",
  "key30": "LjG3i52n2tmqeDJCCg8yVk7jn2pYvV1YtjgaEuncSM2TQMK93EDfoaVqNRKUeQkitykgvukh2JDEfa6oivWANcc",
  "key31": "97S9NeF6MX9Cz9tFtgR3B4LV8XQtuRgZPxF6UGVCfcQhdDtLjNQp4JNYDThpfSu1LuWXyk5Ude6Eui3RmuftMGa"
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
