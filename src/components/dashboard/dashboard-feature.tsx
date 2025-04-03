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
    "52pr7Mi1X1EQdx8CZjAKfbNAjG5Kjvj8Hak17uyWp1UkE8tC6ih8x2CBSRiktj7SujKzFmssgZ1HqSMGDyL72G82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JGRVfx5Kqiv48JchNEXiWVeWjyhMrrt8PDavpWZhkgHSLUuqUvpWdfuuxqCykKtq26A8iFGr8bFCgq1ZN6fameC",
  "key1": "2X76fbGcBpFokg8p5AYSGYcUvF3gUzfiD9jKipPA2u69YfnN7ZwStxt2dgyzjVKtZ9CzezGNK1xzH9WMg8N2SZML",
  "key2": "4m6Y4YQrJbd8hATxLgMZdtuqyrUakXGY5bRidGqjPY1ZqcKPv3fxog43uAb4NxrHEQBjGeshH1xCsFksh85RBWgU",
  "key3": "66S26xHAUvbzRmq8raDHYTbJm7j5Z5iBgnhqNv6qwmM39xDa9RFB89k8Wg8g2GxampXtU9s4ifpAzTeGzHr5outp",
  "key4": "3uP1JoGpEy4jyzm2sRcZDDHsdwtqzB3bQHajovQo9JEGhV1pPizaxydeJhDyfFa8BxkciK6i8y1MqdjZ996ZUVwb",
  "key5": "4rLJ4nBETxt976LQDchQ48GvqsNFy5TMhBQBqGjCuswXsRD6shXXkYCzTEZV6GWmx4JCyiXsXYVifHZV7XPr9toY",
  "key6": "3XdoikyGJtXLq4nB8snm2UvPQM2n3fzD9WBDU1AdYLe4T4Srg7vvUyy6ihqrZfyTvjdiwwjmvQnmRPs22qBkdrCC",
  "key7": "2fZfTJ6zAzxa1gTp6EDBBjyhvdBAMumHSWvGaPaCmkHMwjJ4EjRyBrV7oWfy14z2qHpnUnBLZKNBhmyKM39qmieD",
  "key8": "5YWyG3MbNF1pocD6zq4y3P344H5NnvymCN7dgAiyuz6gJBn2L4sSKxEWzA3hJi6oKRiSb9dsDEdSCb5xS9AaBKcV",
  "key9": "5iFdfsfXE8asoNcyTJ4Eeyo9dheyuWyhMfCA3crzQw4NkhBW4jFonmra4yBLb6kFBWUB4WWCruoQHkB8KDvt2gM5",
  "key10": "2ciY3FyycGj9N7N7XEpVYnjwoWRj174uVERXFx3YVKujJhfiq3Hte19YBqcsaTdDeXbT5CyfgkMsnwwhP89BDoXT",
  "key11": "3ATxFJYW2e1oH37MSaZkWcRB5gpoz1Q59yMLXWR9H3Gjh3JRV2GRaLmST16GnTbi4RkWi3zvkoce2rJP12ZtRmpC",
  "key12": "3Jiz2UoWVavpLnmXTQ4Lu5yhEisMSnRWdeBdbeVptzCCKiakNhn4TtN2vHi75x58jouo6GT36vYMXXxxYQdY8eki",
  "key13": "4QXjf5kEXwWC7X3wpqC38qCJ3rczXGyCD3DYYaqPrpGnjT6EftnADJryq99ghDwBnSj4J5pUuqyLy2HNnALCE9ek",
  "key14": "3zSYcMnGwSdE3zGjkhYDD5wTGGsZeJRetPqvFR4wD8bYXLjdfjBfDqxc9W5SjdFr6VLN94pjTj8ohCT6df8Qo66c",
  "key15": "3bf5nUnW7MHwekwKiq65BkK4V1ope6ZMHgnQRGkqyh7477p9Awvf11HGTTXnEm5Eg3WPaMfvaNGZuqvFxUA1bofe",
  "key16": "3iUsRVUERJhDWApzpYgWKhND2byPkcu8SnSuEoNe6FvCCFa1nnaddKzJBFVL8KcSSnTp9TS6uAUpN8mvVaw6EvnQ",
  "key17": "3oFvAUd4zi5aR18gUSkFmJ1h1bEtV4F4F4V1cNwhoBjCFB2LeqhaQuBWNVyBR4WjLzpGXLRFYGqwQpJXrmVnpzYm",
  "key18": "fkYzdGqMyjC1rZXvFRm2FmFirj74ZEpZsLqiTQ8LjYKNT63QJeYr1xnwnVvZWYpfEvERmQ7CRDS7f5PUYafe4SE",
  "key19": "4YaRQsgU72t5WqTnRte6K3MdBTSP4t8rRhrHJdbz7wHSjWxfKknTfQU2Q31F4HVgxELq7BwpHJHThfFpVUHX7ktC",
  "key20": "2Hrpmnr4Gpnt99ScDnF9aL6Xjkk98f2QVcdfReTyW5jnhza3HcY1ySPvRssva7KkScjqhfjxSrNrdibGWh9LNz3J",
  "key21": "2YWfa2NFpyS9uuAJNeVQS7xi3RCdjuqe57EGVYrQu3HCYzE3ftmnqjn1TGANcUFrbzPcbH5c3WrMy9SAxPUjA2Gm",
  "key22": "53ke99LpcEJAv6ZnvUUWHyDNLTpmV4ePcFXMFhmCch9hb1Lb7HFR79v7nCzYSZfpKWie8rR6vqbsByzBbJskt5pf",
  "key23": "2U2MYuvLFP6jPme6L5kAdXffsH31cHiDVvkAgD7UtkUTfhaHmtNiqMLwofG7Tmc1JGyuSJi5v66LGSAhfAKyy5g7",
  "key24": "2fWw3fxHugZ9hGv5KzekfusJoiSSrxdoeCEvXwFxj9rSnJfWpbx3s5ao54xteRJnkxZEP5Gyb22bea8sDHc4umGB",
  "key25": "G9n2HnU1f21niBV9JHbBk9jKMHYSD8vUXk7jYqEpyH3xiVsFvE41VEyrAMiGUrMmct4Zb388sgYNHiPRVx84Viy",
  "key26": "55KM9zkrbHuPhTpEJnZyTAcapWDX4ickNcwBbDB2xKU8JuPH6X5uBzEXnz4mgWzt5XovPmTGE3qoCrFwMg9UMabU",
  "key27": "3QkSegPn5h7jVmPVbZCM7GHHJFUsFgFv9iRqCq9fwCXN9r68SnYDvHmKpgADjvsUcfqiXSVk158LsYJeFGWRmGuo",
  "key28": "2fQKEJpCpvwPP94oQTD55EdxNzwbmfQykW51nbdTerGkrJrZKLfUBj3tN9Nrw8NntaWKyqpUx4LYfm14bDjEo2qU",
  "key29": "67U9sNs5NR5KPJZ7riraV6eTBJknMCYGGJda27CjAq9pCXBpYSp2tPq4SGRKFEHTCbEaHbwHH7KoV6LKDVTXbFX4",
  "key30": "Jj4QciVkxwetHnr8F1QsA1SrqREpF8EF6Lv1uZo61EfdFAbqapfCJ7PtMNKLrSiDsWo5pfECCubpctrMMc1raUL",
  "key31": "5LeVKnMm6MxLRhFPM3jWBPSu2p6nYUY6wYdRBhvztTgqGsBgDVJ69DH9cysyEoPjJ76SG2oyRRfvSdMtP7FoXD4i",
  "key32": "4mRcczHPXBiFPAWru4tfbazjgiH4hb7fG2TN7cqj7GAVzmnR9fU19XguWF47UFY4gNH6tt3qKbwFm191DjJKEUCM",
  "key33": "4M5wvjo4YHACUc4twreB3yKKf89ZmyY7qrhQtVWWND914SyzezJ5P1MRynaTKFY4qWcA5WL24z6r8zkYaRj9ydFc",
  "key34": "5vbasasUraATVzeTgtHZJHzyWZjFbtxW3Bj56hLdWP7TFLWta9LvUN8aBiyMem6bgNzpN8N25hqLLxhZmuN8Ph7C",
  "key35": "3C42etf5CvDQkhDRS4ZAbKPYB4ZznxCsciWVNXLckz4dot2y7im9VRoDg7zDGLRXF6UzD6P52jUC4wEtodSArdL6",
  "key36": "vcyZSpHWaZtmWqTJDRvVTynESp2phhadusbGsDjGjALuS7KYqHJ7n7pLePKWXTiAiwji24gHRRS9gW5CgpWwzdP",
  "key37": "U21rJLFN6nKX8jqC67gi9USfzeEUMTFTTWsHAK7wqMomwc54fLHjQsJFdy7B8bq5hmhQqAd6xADEhPbWkQjAfBa",
  "key38": "54VBCLskpcvaBYovPYKiZ6NxDv7GKwhkn95EHqYNMo9JMK5VZTUevEEfkhv5X5NahYdZ6v8Qio4ZCnnH2cHiKbvq",
  "key39": "5HuDqfjaLFxgyMczLph8ndy3gSDAdUMEDQdLPZbxoR5gwHMNGbJfBuBSniMqRiEo89pfSWfNmPb6beBbwe3MmYid",
  "key40": "3riwBiUAAGo4UsTPBLM8UnDqzzwKsipkogGkRi4paepNq6kMyzm26A8DTAhM2SWAXT1tYFz7kVh3ZQJ95DRJQKv3",
  "key41": "5zNavG8aCoYYiKEkeVBTCppMAsYrv2BCZuc2vrAmGosWVb2gTXsM66YnugQnHYeP3qHv7HuqdwE1JGkW2qmwifCm"
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
