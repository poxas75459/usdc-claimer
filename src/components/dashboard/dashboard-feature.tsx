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
    "3XKvg7eDGddun8hyF8X3QvRBypvNr5EAy5YuH4M7uw9KbNC9pWJz83a76vLXWGEJt5QTRrRbj6HNAAPrFuyFYHbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SX4QMNMDYZkER3ocq4kQkzs3dBn27XBUevBE2DcX3NxPbxFUj19bwD18kjbsYASWy3tqAmMYJnUmTgds9padevA",
  "key1": "3nu3EJz6ufXGVJvgCiV1CRb6qYr48PbQ3vnp46S98CpCYU9V9eJzBfTHTnDpg6Hv516yuvA3J97PqH4KEikDsCvY",
  "key2": "3z7Qx4kg6NUDiKudhvShoMqNP4rP66Zaw9iVGPw1fFtW7D2wNT5dWQgNqKZ1r8BYVNqmpNeGka7uh9sTVEcAeaYY",
  "key3": "2eKLJvsaQHBMeUSrF4dAF6rYNvHN8dRo3NQnQp4bbsSWQmKW1e6UDfNRNWuhFhfZjxZVZmUMYSpFvr4BzYKVhNk9",
  "key4": "itktUpG3JwpAkoDASTVUUZU29E5rijcbtpMXx3Ws28GNoBsMfkntoT1KmzmdA1TfZtCE8Zb3oGusb61EAoQG2Jm",
  "key5": "2Wgbm6cnvtDy96NRJgt6Nf2ZkNBGDpHdsqfoDY8WV5yaMefg6ftHQ58sqoENSmbxcNWDbkLvWmtWiBcFpd4cDzET",
  "key6": "5duPi1CeVsmmViX5ESpHuMkByaNy44VW7p1JZWwhCj7j2kCNkaovNM5Ze8n91yCLuZzN2wdYnUDqmEtB3hPoJDL5",
  "key7": "sML2i9uM432EfF5LCcCEGFyJYbYNY5b8wzAE45BXeQpL224yfhx2MxNyvFHidNuFm5FVtKrfLMhtVtXZs4zz7Pg",
  "key8": "hBJGyh1iyQQGnTHYHM1Z4GRDtJj8FdRxypWcbFHrABUPaX8yfaUgiXpMVnqhgz3ene8bZghkGAG2AnZPB7wNDo2",
  "key9": "4UxA4DK7eXU9pfeRGkESyjn1qygNWKu8XmW6j2T946bM5xwqENHt4iCFyD7jWzAowQXRfuchNvjk4ixiBfpUyunv",
  "key10": "2JoyMAF4XxL5z44EVT1RDz1NJv4BVNan3YGq61ry1UfxGojPcW1biYBmyJw2R7uVAAyuAZzJsAPMeRTF6TyxL6cf",
  "key11": "HDVCnCdMgikqpKB9Fvn3dfxfa2CaHqWBKfvnPj9xZ4CqeemTz82MwgyRKnLevqbUPAkabDxFDCE9w5zef7h9CoK",
  "key12": "2Vt8f6BAW8mLbU86ZMcg1uSJRAJjZSadjHsvBpauFa2iD4g47xzPCSt1QDA9PJxQ5g3b4Y4gSECzEa5wW9ivhbMu",
  "key13": "45riRxuRwEmWcQSY5sTfshupys2Cio1QCs7d9S69avfnn7G9YxY46NucXfFJcgb3PXzZzCS2SV7PnGziUvjkoivr",
  "key14": "2dRdU5B8qmws6YrHFxiTCaQuhLZpfsgXTiSWwWqXMtnk4akBv7o2Gj3GdmhcvZRa6ucrnJih58ie9q3eoNfg2MKT",
  "key15": "23xTa3aC3jYTAcnpEbnRU3hwcQLY7epjcQTXNYwhQuSUXPop8SMDiGy8WmLs2v7ph7tB1GP13xwaAVqG8uX3DZPu",
  "key16": "5QptaZsFBX9mZPphVgnActxBycYMvMfpMG7Mnde95KEAvSXwu2y4KxjHoMadpMH7HYbLXHH1wSzGNM2YgvkaRf5C",
  "key17": "zKatypkGDc6hJiiQVk6iYyw3Yc2QPLWR49i9HtxjhH5ipLQQ2C33tTiVoU8VdEkD4tFUkFLNLeKKF7J7gQnaRYP",
  "key18": "3cFYjsMeuXfqwjvooZYAJPiP48EmkF9mxJ4Si6rKYM6EytGArGnHuuPy6NkmnA2jVH7N42xaNzme5aPCrMCoVUEM",
  "key19": "4VVeg9mKJzdH9En5ZwkUQy3sv1SMA2EsELgZUUmncZ5tQbpZWohF7NsQ1Rb1aW4Ko6ind36H5EjaeiPKmVmEtDA",
  "key20": "5HqiGabsauBxrJUyJzuLmsiGRGkTVpzc3yALRB18qLaJo7QPcYZxG7eDCC6WhwsGSmQNMZWKcvSm3FtNp9Shf2wd",
  "key21": "5jKCyLqhN25aw7o6wxAB4QK2aKBkdTKo5mU2JaxnmzAAQGdBVwVKPDFxpToAtUVFnZzJnQwYnPNqNkuBFAo9xGYH",
  "key22": "5KuRQTK5xor38rt2KaQoe8bfhUPFjmrdqqp17ohpwcXhs2CHsHBAHijz5hupkhgEoBSoungoNHRxSE8nSxKgRCWc",
  "key23": "5aYhYPBSBEE6jae8fqYa3nsZNZieux4tMA3rLUz9hy58gQbL9BhZ1KAa8FZAe2w7KSZqKKt3YsBnqLCxnw8JjHTv",
  "key24": "CLF3swjJWgSTRh7s57ffvAEZBneFtwoh1Yin7AW8ntQsEjSuQBe4wEeSy2mkxMkDsxwjdTQZntAhcod3q5UcTEa",
  "key25": "3wRJnJKK3iBHpwzQ22nrX84eVXUQba3EKFxhcaJd3nrBeh3boNKAHnYo2NjGSyEV7kLgHuaXWcA9mzK1rzsRWJDn",
  "key26": "xtbcRnSJUpLoaQYAYhCN2bBDGYhmqwyDznH8sntVZv7txFLBKYDyKMt4kmWbUrL9EXeNdfn3i63SqtAqr53caJH",
  "key27": "62gbDyuLcHsJrUh5A2GW298oJBtETMivBs6KUfznX9xKM8MsgUodatb516RFgNFe8eNHH2XRQZkbyRfqFPa3ucVa",
  "key28": "4LtqJWd26tHqax3GmmnKaPpDzPedKHyX41QL7tXwkFN5BTkEsG453prnydLkA7hR65uz1SzECKj1HQFPzJB9R4Wg",
  "key29": "jhqUp7XcsHcSzftRkhn4uo1Ej3ssqs5PKDToaSQr4y9sHXE3rgML5M2SJqAxJQTHarHxjSfLuAyhsGDSBfAvxoo"
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
