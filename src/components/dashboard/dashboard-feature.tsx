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
    "4NfW75bnbeyHANUtTHbv1odzbWhr3aBGpgzDBt5dsBmu33apkRYtKrpX6VuWQdFuzLGYYu1DnfC7pYd67dHThKHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uqNrAfUZnkPXdxbw28ETs9ubxNYwgAr1Tv5Evh6wcUb5kg5ASNUtaaKiykJwucC1HnLNmnvnoqFCDWkJvYoWeMT",
  "key1": "4oqa6ntb1Zvwxeh7UyVkD3Bq3M5P1fkChRRimQWJuSccKtQVzebrVtweBBkY1nW1Bi4vjUc9fZcpFCyr6duQy4L1",
  "key2": "4sTqTRY7bd8pY2HZQRMBCpUdM2cHn3dqdU8SMnYYPgnZX6dXw72LYGDqx8nKJxFxSa8vW6gcVTa9UBhVLzwpG3Yx",
  "key3": "3YHqekrndZsjWooE1bniB5vGcEeJ1LqUuKbVc1mwAkbnaXXFv2YdaXynyVQSjRErsxkSZxaVjrRNWLD7cecQWQWo",
  "key4": "a7HBiYRUx5PDx8b6YBYc3k8h5unkxif4RH5eTwBdWNyntcDNWF2BRnS23yfuP3tdrgiTqWtssuB9frf3bh221i4",
  "key5": "5szGfbZKP3LcLVxaW9Drv25VxFydxCCA7X9HsVbfAJwrNCSjjghzVyqGczQTFm8mcrjCrszG6qDYXuyp7Ld2uiit",
  "key6": "5gdKD3hcC2qu3b4njNTc3Met5QH3h1pRTdmrRmkq4ATrKUVH6eFWFVp92APi8GrgcdquMyy8AidSBTzfkj6KVyEB",
  "key7": "57EsmeL2W7a1dQkFuvecXZwQHmxM5gN9CbTkJW24nDHc21AHdxP5wafD7CttBj5DFWdaL6mMRKJNrH8TFh2QPzui",
  "key8": "5KUAVrtgphGAxWJc7HoaHdbWfoehGTdYxzi5Yq5C7XCBS6LgVTcWXvL9zE8kQoc1eMb1tcxhWSYkH9QDaBokt1Se",
  "key9": "4Y6wK2fZ88YwzTrSTvNzwWoUEsGCjUZNTVtgB6A6kzam87wXGeWK834VfiZcow65rxY9zQAkr2vaGhmkronu6beX",
  "key10": "48w6WwYQGCTivjpDGfDo9U6422Tp7uVf9wwtNh8DaU7uecWdeyS9WA4b4jnGMb1YiGEEDXCXAsz674qY6AF1eZhE",
  "key11": "upkAHqY23HjgSkBHGffHWNEnn6PoLPx8Lz96BhibDdnYWRvPWgPoTTzMfnAyDF2BifdyCxuHsZ6ecGYLdnBRhxp",
  "key12": "3mxg1DhpRWPVAAHdcvW5jZvMdwFcVV3JgNPUdCuKgFuRUtoJHZ7U8LwGz9sABHX8p6joxxa4M4bpXR4dwFmVnUuY",
  "key13": "262JRhgSHwdhy56tBt3NR6Fh9xiwfwzfGgRh4tfcM4bwbTXF8eD2moJqWSJHShPL2LrAX14btJBNXCbd3FpAtKVc",
  "key14": "2437JFocwwwr2s1wiSG68SDXYitAqUq8mEqTk4aRT1Qu8fuMVW7zktnN1HWL57RMzKYAAWyXkwqdErBuvK8Y7pBx",
  "key15": "bS8SoTBMZnJk9w9vMeDpw62zvLyUqR6iNps9odg8873qp4oS1jjBjcoEguJxYRE5EzfEYLYkj2eM4Mb7s8oP9xK",
  "key16": "2HEtxSGdDizdK6ZB4dZZDwD9fgfgF7FEoQWZZYt1ZHhEdt9LkqECwAz1EftUHcLys6XrsrrRtwtn8aJ51foaoMLK",
  "key17": "4Knen8hEoxCKhGD7fNuNVBoDkL7bDzVeiGT2dS8fHMGwsZeYqQwZYSHxB4oBaLKE1SUdEzGgLqzdS5eXMstxbitN",
  "key18": "3H3DBndb8dNJ65AZsk2zki5xvrnu7UqWtxWQuigP4hUMZQCgUCvGLS1eBkoCcheUh3vSDdinPVW1nLEXQsypkg9D",
  "key19": "4Gf5Achn1Qmvr9sAp19CZ3XPuknQicCkSSCTspBeYs3WEjxSEqaUbBdwj6cfbYzDkAPpPbSWAkiGpoPe8WGNc2Ja",
  "key20": "5RtE4RFuTMVaLCM179z7h1kReM23ppbjzebzJFPK8UCJw1UTjvXULzzSzLc2ohwb2EBNirAzTjjs3krv4iDMhfZF",
  "key21": "4FAZQf8gm6DHtyVygpRMTjjYmN8JZp5dQ5KGjvqFFpcbBeCGHfytJL1FdR2tfuMg9JSwUno3CrpndrwmURqv9jma",
  "key22": "pAoB18TzYaigS9PjptRtRBMRoXWhvcAqXwu6aJ4TzdxqHwSD4STNibi6RnPKyyhAN6JrRHgoYWeZ3rjyekawUGm",
  "key23": "fCropEGXVHHnk6zjq98Zm4utXqrE6Sq79BKLnKjKDJNe5H4ZKAH8WveuUe5qwCwMEXjvgaQiqEjKTRGBnmYJsX5",
  "key24": "5k3JbftcYh6WTJZgPdVvBxBD88tQAKprQ1tMWWfqE17gzow6eYifH1wcyPxBTyDjLFfSSmuxqS8Njw9KvGgnujbg",
  "key25": "bKUWmmAgjatZFub7RtMgJAjyag6Tmcc4C3RCgBmv51677drCtaedG99xzrcVwRQjAvEgoxJ1qACw1PDCC6a39mX",
  "key26": "2CgBZ7cks2QNgNp41Bc4xat4d6vbQv8VyJ47E9ipgEUqdrkodcter8ocMSoXDkZZRpQbH5SsafVJYbEgwZteFBYN",
  "key27": "3Ge7frDNSGqG6rtX1PUnKT45vG3w4oM9cgi9FdZHY2xWPodHvmXN3dKmFLUfDSvpnXmuwvRg8u6zKLiksrmzeJvm",
  "key28": "3DsgXL3h6S44CFic9niCWRv7Ut7DH9n35r6eknSsP1Md9LEkBbNqyNqxRtUiHeM2ase5PUSS7UvFReShxepujXfF",
  "key29": "3LhbvPj46YkumwHA788eZPEekSgcZNsznfyb6ZD2i5qui7WbbDsPJWVxHGCP8YHjNygY9wtsjucQ1m3hnuEavG78"
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
