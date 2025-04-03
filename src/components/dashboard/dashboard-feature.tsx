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
    "3w5dgqZxxsuiZZUGQsi1Qjvi7PBkHupTzk53xvT9sTCGfCePWvuWMc33W47GKNHitrB1ZpofVhFxDRftCszCpb6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gWJpdkw2ATZ71gtPptfxKyCN4WP1wLLnpxCmywSJasTQXTFWxs1MBXnYXChRbkWVmCQs9PXn2BMxvDZd1JQdbYj",
  "key1": "CtQte7Em4byuKs7A1zHoK5ePhAxgLauvxR6LmMt14C7fL8z2UqYksqZS98x3fHsxzGwAjd39gWDDFwGuSkMoRVA",
  "key2": "vHT6LZ6NzUTwHbQdJvH55iqXArpPnaWzcsLWLpGpUQCMiTqqgSvHbVwUiZPmRJzvQN3pDYBC3GuwG2AT7DG8mtG",
  "key3": "5deZtMmiYqxWCuoUFCR88SB46EXXwmFyNUnvC6AK5i9RgR2hYeVSwEBA6KzD3TXThjySdgenKzZU8hG6MA9dXyiv",
  "key4": "u8VQMAGaFkGqseeFTHiC2g8a3gEjUDe3tdK37Rh1cmK7JkUqsDJ1nvh6QeBNjGM8L1UC9CH18zKaJeWBgGuNq7F",
  "key5": "45Vuo7v4EbiT2ryU9a4igifFFboGDAGNRQ53rLsk5i1xKi6zvi54sDoFFDYmeAnt6yhuRg4joGLq9TirU8hdqZoV",
  "key6": "83isQSaia2yS2QPPwfE16kgWMuY2cVoMEnaAqeiToQJ89jsLeDn2upCNgR1oBtD4CL6rcNcpQdyGzEix2KZyY2Y",
  "key7": "4xMkSLFkC84fqvvmU4ryGuwDnGJD3AqMgQoBVbsrmGR6tW5BcbPqN5nxe5Cw1ps2GvsUE9QmEjbe1KgJnfYz6WuY",
  "key8": "pu2vyCAuRH1zzEo8GkokHTE1Jgn1bTjo6dhB2rEwy4QmohCv65fgF4yrhNJAyntcKLGL2Gs1urbsT8VZGLtm6z4",
  "key9": "5gY1pCgg5YRTrvkmtQLoR3s8FBL675uhwvcQPfPe6cENoxkfaSWcziBUXwPCeHHsTrKABkM4iy1paRddqjQ13gMh",
  "key10": "2QEtpmXLTtDUBVszvD3ru2xJE61BL8RaA7H2EE8aZ78MhKx3VYGDzbmSEkw4gb2oo3cYnNw4c3tQNaWwFQxUGKuy",
  "key11": "4ckLkjLxV6JeJGL2ZcUZqn4QoyTtXPs5pdMPYsSB2VD262qeyFV8tc4GCmavuct4bkMGZ5X38eENzVQCXFivEAEA",
  "key12": "4ESAo8dYTtzgfXa1uGYoAGx9VPAtwkkZBRFjjUFKuaNwPKwjtWfqvPPZPDWevRcTU9Co3brmSmw5Dpj4HuteJJaP",
  "key13": "5MzKfTfNUix18mPePGXZNeSwa2EJd1WpnqpS4ZHme7LnqwbeA5doP2tgtboPhLouPeZt3RrT5wShiSPefPLGnk2n",
  "key14": "2KYgNb5fgDLhDLAUqck7fcsixkP5TMkzdPYzV8MzHej1ck9DnNiAQu9dMytCXytq6RbhhFgMK9nt1JnUSn4wPkxJ",
  "key15": "8tqym1yaGwUaTqADhzQGPfmWznKX2xNLR5ATavka6aU1z73nQZuHJBp8paW5UESiFQTPDVuugcraG41eqdF69jq",
  "key16": "4bddyCq5pHY8mzMfrFdvAbqK55ixmU6koHbHSVtyE7JmJ1iSJk77qCZySjKeMPy9CZVWEqrRqJD4yPxrBsPuovqD",
  "key17": "3ezPmv1iQPyTkpJMkLS3VomDSKWLgNcwMs5eXj2UU47xCiCwP6JaQYGGfQaMjsugAYg5Gs7Vj5DFxvcrMKKUYvc",
  "key18": "5qpfSXEan79eQ8oNZtoA7zGsLaUJrLCj67WP7wZzZXaZR6NsG7VdYkaT6T2gSaek9uRDijjCiCJpwJYuGVXjC7bB",
  "key19": "5a33GNMeMaBLutDc9p1EfoGVWT1wg7Qtq5RdSaB3YGRR4YTEtY1EjB9iYfjTFm8Nk3qxqn1p6vMhRWpdRA45LiiF",
  "key20": "4GBvBW65AvznLsCYqCdCXzWr6pYK695QnJ4yMz8sVVEsN94cUgCriEcxkccBxGoEVXmMEn1gFJwVv23VnV9rw4z9",
  "key21": "54J4tPkaErxL7jwbdEVna2yRaAmvdD1H4K6fmUyqz3GCBQDxP2EAqGNGzEfaFZ1D1XcYjvHRV3FRTP5DSgQNYqzZ",
  "key22": "2xRE8XQDy6PcEz2UFVYbbfVZUbZVbJU5R5mqiUCRGcTje3j47jtECV2Wz3GrAxZYhii61XLXYsB2DUSdvqybPzNr",
  "key23": "r7GQdKqyYHRPXs91rR2EUuz5hY92nfsykP64MpMyLx6frHWgk5iD4GY8k4doxUXjKPin6D7D5E6WNNpr85hGgrb",
  "key24": "4EMYZ8mo2QDKbjxH21r2phhYcRoeSnFAmM51NEoKoKqRYjy3FJA23z8Hy7BrpCCLwTCZs4aGvZrrwksJHUJDPdYb",
  "key25": "VZrtvy8Ur3w3mqxfB5VNGgdm3435LugS7qjpdsWXFUgj6yjka2VBZ37yQpzuhLx15Ee3GdDnxVX1vMzSxcGb6GT",
  "key26": "4mTJBkikqWSUM1gAjh71zrffAe14TLS3Zgqy3VJXUcnMTFxFyEMSXG3h6zNFF4LmfCSGLZiFXvWyTNernNQj4QFR",
  "key27": "4n6KBkVzTCuiZ52Q6SDbxwtWN3GRU4BdvXCkX5WEgzBnqkKs6aLY2b4o7HFCpR4DnUwVK9ErcC4CivjNjRpbAonS"
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
