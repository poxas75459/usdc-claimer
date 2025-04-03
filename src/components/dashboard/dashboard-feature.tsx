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
    "4osuEA298G6vhRDnp1VbM7ydnMVQa41pm5RsCW1w77oVJvowd1onvDewhAKFUuaXRd42ijFM4pg5FApYXwXkAvYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v65FnwsR2gf59Ax4psk82uA1MmSVe3wPoCwymicrbrj96MEoRyKP7YJpw4HiGmactArkEoL7jHfjYUc7s4hU857",
  "key1": "2bKjE7EPYsqCtZPnAHJhAePrNxTqksJkB2apHcHQDBzhiXeQJMpRrSoXEsUra2C9fLyEavG8EDTnR3hvYckDvnhy",
  "key2": "4MDMGdKXjeqhcRdDPKabwLQ98qxEUhSZXbjqc7CsGTFcBtPMGLUjr4WxF6oA2YQkjyPf95G4muzsfLVqnjvE8LyE",
  "key3": "31pMRrZ75qVrjGKe8fgEbyCHHa6nesNvpE2NfTuQ9BN1SpEXQhkResCy4cCTWTUws8BALp1uZpC1XT1NPcX5JZMd",
  "key4": "3qkhBSjRKKYgQqRPYVVYNumLKmuxSx9E1DX8m8n8Xf3xfKdUxmRLYDbBDmHX2X9qeFaPW62mbZswVtAWgaZFTPNx",
  "key5": "bBGnphoP2pUxbjXsANJRftMtRNhpxmqafJx7zvz8uhvdwFNv6iBjjanQwTvPVq5FxZ7ywXjZ5H2PaYDCG3xVMXd",
  "key6": "cjty1CBPcFzcWhBw2YP9VBcMUsQtcjzntC9XGA9whSp8rGk96V3PDLBT5pi5PR9KJh2D253n4qpwUUvjnc8T9CJ",
  "key7": "4oHJgjyrqF7q3h5t43CE1a3fJ5cUKqchwYjoMEzZFRA9RcHF4uiNpNrVgEYJ6baCjCqspyn49my9EjdSmz416ury",
  "key8": "5v3NgQ1ms1wBfHyjcYDkwq6oRrHsz9xQqXtB5uX2hBy1PQe6c2FRSnVpPxkagpdz1i8KRC5Npf2CAfFQdVzRm6iK",
  "key9": "48mM97Pz2qUrSNJkRCu4i9hmMahMjeeh4Ntx6cpjvWCqRZy5Fq9Mj7GykWFVuErmZwYc7DTPAVv4vepqfDqKqvSy",
  "key10": "2DpTQoBbcFUws7BA3vpUgeHbPBSqEu4cNaW8zHorKs65XF4YopqQNdvMrrZpVqP6fg638TzsR3ZeVeq9GwXrPSc2",
  "key11": "2PhqyyoGgH6V93zQtJeJ8DgxVFv8yCA2FuiYu8gvebBc8jFMbR4espxVD5HxreVsueiuoEBbLbRYKG4FTZkx5TMF",
  "key12": "2edaEQXUVXTvyrjVwpKNd87oPRCxn221hggNZRJfDzmHPgmN1WeXWJBXEyavrrtf6bddyVbyhLPLBmA7PHWDQMPe",
  "key13": "3nxVVPPxwdH9rdvXWUYYbSvxeQpoHMtv8WRgeR4xMSa56xLuirZyTwJbY4yw5ZLRh3oVbmapRNLGL7N8ErQ1NNs3",
  "key14": "4CiAbEGTeBRqirfpvzUEroVVP2Q95ss3TkCJeVywWnNeXzu9EpcXVwRKkYcHdAvYs5nCC1dR4dGcR3NXb2XktDWt",
  "key15": "46ejZ9PPm4SZpVFXeiJ9mPNbWH7qxno7bquZxK2WXvHeVAtuQVGQixuogkAWF7Uwi7mVWdr7syhZdqaXkbJrimii",
  "key16": "P2f6VZwxnRPyfPs41op4CSpWXt2icpVpAyR2h36iqo83mTb47ZZzaoX8YtNJmUR7kV5NTpKPskTAwwZ3UMQXSX8",
  "key17": "8FbgszWinMvXJEgRjWtS1EkAnpE532NpAMdkJXU9TFfF5qDYr7xrTbwmrT2PzCFw6vjfXcApxXzW8Emoa7KGV2Q",
  "key18": "22zmtUQnuGESTqivMp428spth551C5uZHwSVH8kvQJbrHpipQs2KimikA7vWy7epxqGJ934JGGaLmb7ugmV61673",
  "key19": "LGEJCWn2zj5aeuLTfpHUWp1NTMjdc4jhsAMdo3PMWRkbLixcdvE6n7kyA5DSC11uu85huDsDyNbuoDeC2uM1CES",
  "key20": "4rxruts3v6D7GUpL6CQuaZfUJz7mNZJaYdjb9XmMMuCEzFGQ5ZaZ6BPJ6NX1nPrqjJAGbJjYaWYhkkbX3achH1fs",
  "key21": "ftBoyq5skfEF9jWfnDM89SXVvqhYH9uGnjrE3v5NoUThqyYAgfyVAr7yKsUnsA7ESRGY9955Ta12uoTZ3MV8ssh",
  "key22": "UUaBF2hb299nukh91BrRCGGVkD1VMjasXdk3xbkdgsKkLFTuBaEDrndDxcXYFCpNp74myBfMiWCTicQu4tojgHJ",
  "key23": "EKVfPbrvNZd2hmqJMQVRwVwaWz789FH5944vBsCVbd8FEPymJrPx1jSMohreRm9q2WnGtzUkRGsUaEASboV6Zrn",
  "key24": "37AzPvvkxsJEnTj6smK56Mdcr43fWrkMWhQh8zvCWhwLrgWKaRg3JnqwkqqhWrhBnkkqF4DUF4wVJUFMh1tvgX5a",
  "key25": "3bQUgv5W9Ymvs5FX19GXM3rZUU5a8rn4c6oq4dgnhFFWCbFjJP5vAycj5uS2LUusgAh2t8aGvPyhwibceag4HdDr",
  "key26": "21c1CsPTPYntZCzRHUn1kY21ZipeJ2eZvCpw4TfnAM2tuj8eUjgEzzXfpL9LbL8DbTanJ262JTdLUheMFEqnP7Ue",
  "key27": "3GurTcdaTk5Ku3LXzZJRJbwQcYYtoiy8qkL3wDqUEroSwQLi57MBVcorutGn3PwKQYX58Fgea7xB3TBZ5cGrcLR8",
  "key28": "4fGWnedurQ9Un6fPqZkJSLVM4jePLwzZ3cVqgfAviheXF4ktpJDCheVDguvWxw7otQ1s4PT8PRJP1Uo2KRA5fTbo"
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
