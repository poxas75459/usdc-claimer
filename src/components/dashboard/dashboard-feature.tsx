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
    "3rvo8juBbstWgBWZCr6iyLwCXAnzskVFixkTzR4mEy2U5jEBdFPavGdwpDhYaR9Ji4kQk9VbLYAMqUHkowxpk7eB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8vYh9n7CUswZVZCWyXSLXeSjYQNL88WYehA2PUUdKg9woM59Z6mmh318LVSEsgdiWZ16Cgu8PwLKhX9DxArTWQ",
  "key1": "4usqe2J1cvKPr1ZYMiqr3uxPFSjgSHVeAiQTMTttTobvnoSReR6QEY568hC2CxzwavHFYyBhoMetAsy2XVsextNw",
  "key2": "3duvVWAjvvhMMumjT882rJKcMAR7VjcZq6rRq9C3yDTtUdmZThGudCzm6gU3HGPppKRfMg5CYN2e1yXsnH1YP61h",
  "key3": "3T6RxbdcFpeLDpTXnSFAsmeZqPUL4c9dr4zdRCyaFy6UEbZJMPEdqpaHpyHwy2wgA7wrpog7Trgw8FX99uWyidPz",
  "key4": "67VDRwRZK1FQeqN2iQhs6MGtJmPt9M11aTHZfPqDYfcbjXPWeAqrDWEZEhoVVS23M37oiYwiMhBmcjszMexhjKGV",
  "key5": "2633wRBBkthHvQYKPFVye1nVrdVySHR44StyLrKNruwuUTri9Y2vMYoSx6Kd6TRQ6BptcXGV7mbiTgkiCbW5EF93",
  "key6": "GbsEi2PZvrmBXDRDP8drdvXNHvRuPjevEE66CUPkgNFcupNbsmNEwpbtqWp9TNEjYjdGyKGWJYcViMTdjtn67qu",
  "key7": "4Qt6b7TK1gJnyxJUmRMiiR3SBLg2tKYPfewZfyHdJ4aZHssKXGQzHZnAP1fDAdaoSonDtetCMdnws6zdn1rwYse1",
  "key8": "4e4VNQHxfaWofQDtHYZJcLWmN4mBTU9VTLZ2opeXT6rbwvQnUW33Rn24e67Gk41dBqxhcjuvE8k6citofbGGfckz",
  "key9": "QngJMU6ZxhbEG79v87q8o9BtysawYp9fFtLEYZMcsvcUvemLQbBizdgKxB2cQ1H5DyUmyvmq3C91ZQv7P2GpCVE",
  "key10": "48JqECxjiCgcGQMoZTsjjueua32d4Qtz9ew5s2hCWKi14bRCjRTJ2Fisk4hhsmcoCfhVuh5yiYjNa7h7MVnFkFHQ",
  "key11": "5jsTf3NtzQ8GzDmnT4PNgmUno63UdncvGLwCh2LH8KFkBJQqR4rYxCYhqoYF42voEyfMMHVrVE25ys2pzndyRAsm",
  "key12": "3qTZRruhnw4Qvb9q2ohNsgUe1Hv5bCpnipP4bnqVvjcUPDcLC5ACGwg2cCsAUCYpM34vRgxbrZHnrvvwVyDyz8z5",
  "key13": "4CFb7s6zbk7hDzt3YYnnPn59XD293GjhbRekRcJvDtDKzFxc3YMrvM22HHN2wNc7kU54U6QaLXLfiQ2cfjKGKRV3",
  "key14": "MwvAJZutCibnvC6E75v6SeLyvYH5VUZ6FuDj2Ju3REfNrELxTnfQvCUs1d4TvDL737cc1fpsD779LwyvTzSok27",
  "key15": "mziMmHcJtno797Hfzv86oFqQpHQA74xziQQRQamzcn1gH1xWsPtyppxzUcDLNGyTKkEfFyoYM5MvdggJm6a783W",
  "key16": "WNWjLYAqrE4eLQKDdpMv988mCe9AsFj4jsWe1P2iFrZjW6TAgNsWxJdmRkrgWqYaaRunnEfxjodcKE4XuW2bQAq",
  "key17": "NapCzpDHfQWvZgirsxWJQWp1CN1arWFzNveVwe7UKo3ZKMSwnZpk7tAq7TywzADpUHudAzAKgTooEPWC1ZiWNdv",
  "key18": "2tQbcyEsmGRigVqucz5kUVLaW4jW3NYaZHp1T6CQKV3begioBYrpKzzgJyg7vbBeTNgQieqWvY8Pybg7BfiLAHyM",
  "key19": "25Lqvyttgk4EqMPgpAjJyR4KaBBfmeTvonuX2DuCDv6gd6MWgke5XPCPMuG8ADYFfiMsPofwPLbpVpPzwgTknKwV",
  "key20": "5SNFFiTo6kN2AyWPRhvZnKPTS2CZgXRy6pVzSrtpWiMgAtYgaMukuVonVo69NMoMHVdZPdLRUNcexgUHoQaHJZg5",
  "key21": "3Cwz6L9yYY7itZU6XQrwCnkrLCs8c8nbtAMD9nPC5UDBj6iUTrbqN1xCzbpkBJXNafDBCq3sPaQyPFhg4YbMWLPk",
  "key22": "C1Q3oLyb1oAGnwx6FxFXsp3k4b7jwsnsBkCXba6MQzVtVwhuwRF7LD7qPcTB7vuFv2fU6xaSF5N7E8y7BADkjBT",
  "key23": "du7e5vBNKPeECbaXhK1BjvFUEkNjvSmWBF3NB3nh2LfLY36pWamLAtLuYEjg9hqPACbCZKGGndqqFsLwrepsjyT",
  "key24": "217vbn9XdWC3NfcZL3siTKc7ujTBx93dZ3nYEFWeax8cXo2fnpWsjqAiiXZZaWBn1yxbTCRhKwk6a4GomxYRByn7",
  "key25": "oKEFB2eRhe7yLUMnVGXnF5ej5WuFjA8L9Cx42DxsUxZ6s9hRaR1RKAgENRUkuytDCvSawpctqK9bX6sGSfe9pNy",
  "key26": "zLts2mdUXhwJ6YytsCnnRb8uUQvetmBnxRfbWF4SFu78n5ibC9DApLZjkJaekLrwr5bJqKchNqUeEjwyDniXThB",
  "key27": "3b8f68FNcUT42etCctZANQWxjr7rQyhzedU1ayag4kgZQBZAULtdYS1xeWaCEvrWL7D2oPcWQc1H9jricUFJFw1u",
  "key28": "3iZDQendZUHm1sJhe8xnmLB8bonReQL3zjExNBff8uToeR4Rfd1nCnvbAAiNzRCduA7CBsBa7HGLstVJXcc8t364",
  "key29": "3NhTU6hXSj26YUFrMRY8ZVXEQdSTip6BDVw1UvpAH1KujAtgq8KZqddaW5pVGLwHEcs5Lcq1TtNSd5N5vowY58y6",
  "key30": "wxEoUaYQnN7JuYHVbMn5twLh93PvCP8PZF2ChbX7VBKW2biYneGKvSW13478vWu4oTmatadHFCoYj133AwFNYAP",
  "key31": "2EC8QsKQ2uqAX6m8wUF13GD2Vaa8bARPjvYRft93aSuX38CRpZTqR1EnCr4vjyqgDU71je835VHv3aer6cL7G7Bt",
  "key32": "a9nYNuMKPaL5XWrGjmNL5pR4vyJfRc9JKqrcMu3auZ97DKhAszK9tQs69iRsW3KQ4aydBtB2kxEBUsBGy5iL6Av",
  "key33": "4SSYCXkQWjvkbX3BJAMwFAHskgd9o8rCYzVS11pDpUweaizNg6Jy6GcyDuNbZTfCXsjiHXqsTkSA7wEsZSMTgsUt",
  "key34": "3EqbigXP2ddpK2LCHRT3sSp5mZQ9dBH7XHGkKuC62YjXyY8myFUmK3H1bipV4Lr42BgixobigeCK7PwhN9QjctHQ",
  "key35": "4sn9qNza9EsWYjws7rPaK4SSXcMpsEe3QdpoS4wrNq3BzeNuXs6gwL5FrN14bzZQg4hvsnSuTZMXbL8KeeQXExcT",
  "key36": "tXPbgvxX7an5HsLJxKZRaeJq1oKbdqs6o8keXzwYe7R6DBJ82cwvMzJ3FnC65CRpyHoRumpragiW5mkctTbW4Kd",
  "key37": "5R5KCs8PJCTNzqG4RhgTCPrDsfHUKGG3NQGxShRA4EJuQU75hTsiYBui7NwgTBuYugTGaU96BnaRgtCnmpEZawCw",
  "key38": "5akWzcVmWo1xgMsAwvd6dv88SG1SQrQhvQkGhqEEwYku7DgGzBS3yW1TWt9UBnifn7xzbosnBPKoNv3fBTBDZWB6",
  "key39": "4Nv79hA1MFSa85Mn3V29m28eD1MoznZotPVH8fdCmFASCpSRP1ADSgwuwsy3wHTiok8TpXXot6Zw5eK2B5BDusG1",
  "key40": "5ULzAgm2osVU3CKcPFhHvgCAwcesVwtWBM9e1aQiDQbNfWRukXSRMyqaoMJBrU4DpKQ94zqG73ncvgC29ktWcGET",
  "key41": "3HsoHnhU9DXoTPxA5qYLYjVD2n7LVdnzecZsFryWJFv8yxNyU5Tx2o8pB3AtLNogoaicwn28xqcQSeerfbbCJuuZ",
  "key42": "2gMFA9x346XX8H2wcuiNouwSnxyBN2oVQpr9RaH7gsZbN3ANFGBRvLxJsEM3bC8XRLwt2M3XmXrVkuwh96rDqJWZ",
  "key43": "5SRR15WjvZ2Q2x6y4VkrRzu8RPt5qVRec5yiyhweNKRSLGSbAkS6Zs2Q4rbFikdiiTnD8FGcG9kPgaqNf4wVTFL5",
  "key44": "4Ev6rtKsnVhwPD626qQ3yoMH8WywZhjir442EuK3L7ovp8AEFjf47Qd7karveEZZ5ErSC4L3T4c4pX3Yccg5P8eW",
  "key45": "3QYYv8otWPQxY5NmojR9z4HwQHSZxLiHDMPeftPQ4pBXaQHwN7dg8h8E67H3AeCrU9YmvHpuGePXBtPhozeenGqG",
  "key46": "f3QMjPZddr8dyqUtEWNcBpnWq1Gxnbni1VPpganNpu4GpygSJBTiXtcLePkjcqnaRXfews2m8t1ywxkkKVWsePm",
  "key47": "5qxmuH5P9tHEWin5F6hEPiam5748N5mXPfKjkpfhn6b9uDVEBqVnzEtgoipHNBYcF5CvSbHkB3vEFy5fFYmVZV12",
  "key48": "2iwKBbxDp2bss9M7tMGAwDzNdMB6nMx7q3TZZRUSKKvBaZAnVcEvpFzrSs7CDjrzrrWV7rFojGGzBkzgo7GuxXww",
  "key49": "3rdgpZJhjTmTGN8LLMhYVqMmgUgSCoqEk7DEGeBKEfdfTsFBHGq32TUP3GbnENNbXaPw169oSXrHNgTLRrfVW4vV"
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
