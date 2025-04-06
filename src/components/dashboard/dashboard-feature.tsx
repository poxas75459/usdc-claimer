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
    "4BYxftP86w15DFp6M2D2z3WPYeUXPwgpeiStZmA8h5efkweJ6F8QwC2yNmdixxXyzxAvgKiBSJUASSeu9d8w2NTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o14zktCsdAdcpiwugj1YRLb9J1mUZgymawNyC923TE6qmgLR7WnchYevtaLxmCRf5DkB7vSZertijgxUhyRzL3c",
  "key1": "A33ra86XBrdAfqxjN2coSgVmW2kmD9NrErGTdVDfpB9hCsawfnStoghUXRnQ2qGsyyVaSqdFdUhXYMex7cyHxBS",
  "key2": "nEFo7G9NbG9aEbphr6rsZybP7CW2wVop9krA6FAD4CPctMMj68VjhJsUR7ARRaun91uKMXDYUHdBSnfE92TTUjy",
  "key3": "xjwZFjEsUUPqqUTgHLFseHzHCxufH4CkMEQy8vJaAU5pKqAE3nqVbzy1YJUVX85Z8DgRypT9JhQq6RxS58Q9SkL",
  "key4": "3f2KVKhn4LdkBuVsx3Y2PxoxBUHcWb66Z1yVcmBtJ4ugeEKQc5q9k8Z8MJJybasSf8e6MRAhy5qFx5kbTpyGgmxU",
  "key5": "5mFFi9xK8XqsCUdRpNbfJgN7Rg2imr9E7iLXQ1P9kMag61GuqfGyXV6WQ7agXrUmqxCnNPwm6sUMbwsVNX7ohNGZ",
  "key6": "3TtyrYgcAwXFcxqjPW5NGen5f7WmrWYNBU3Qt543nKn5M9qccSHkQRnhp8iqpHXLeJaZm2gbGjwcQL181o8HAcik",
  "key7": "2H7DC8wqNTnXxA62Y1fh2kWCcKJk6Y2XFBNes7T3hjxrBzkjLj8X1AWP18UJDoWhFJNBHHKj7J2tSYex5oHB5Q6p",
  "key8": "3CDgPp3efSpSaJfFeALvVY25sv5BvdJkAgpAj1exPGLBPAQPwWHrBomtR4rChM1qGU9MzHVi1E3bpzfhYLXN5eBD",
  "key9": "2Gfg93qi4ydkwsfLNysox5sWeeo5H3VzCcg8gGVoMjuCJXXCYZiRqRrRgDVWGgpNvqoe7jMWEDTvhB7hWCQ4ynRD",
  "key10": "5mBFgHkb6Wb6X4LtRGagCQ8Z2BBYKs3JgXAc4LB1kpFtUYhktLpK6zd2XTKDHvs3jqZkWVms76zRqzSqMDUfMBtX",
  "key11": "4zV5sci59pqif6myGTvcEmSxiHmbFHyiEixou83D6hBjq73vaqZoLbUkVsnpHPQgTzJXmx8jwEAg49Mc4vyUX6Re",
  "key12": "3DUgJWLjfv5PFNLoHwahGWeDNim4KZZD8BVKePGMQvrFCLa8zvVe596USQoiYYcyC4yv8ivwKmBhxzsSHrsuPfFs",
  "key13": "53LFL8re8KxPGNiZyGFWEm57BhpLrEJHFDEj9x4tE3KR5d7aLB6CiFZwDg57tNs53CiqBpqgSaJvzJZusGN9kmeC",
  "key14": "4Sza6sWGmG4qAg698fURxgB6DqCut5xbjcyWDtV3Rpr1Mz8NgZok73jdrJUinsnszozSPCvUQxjDhmUMfHM2MCcg",
  "key15": "41msxW3hycUMwcX8cCMt6ADDBx8QzMc5JCQXQ6VA1VeG9JqmpyFmmj1Qhu3Know8n7g1siKJu2vCtbXCRgARMjEo",
  "key16": "28Q2J9abMisozcdv5xW9JsQKPxYvewxAdXsjSXEsgm3PZX9KDQHjoPSqdgDGgYicGRC945UfDrDm4xGcCtarP8mC",
  "key17": "5wVPGj7Wguh2t7KPv2PENWq8zri8b5ZnvKxw6y1LacGc5ijNKtSuYtzhEkZyv6efpmyQHF1SozMJ5hUvn8yA1Pcd",
  "key18": "2xVg2J5ros3dGAKyTkmyWBfVBWkSVKCSkpnHSebR6VKttwgSUprfeq6TFUnxKr3wAm1VGLgnc8iQAtfptwTsim2G",
  "key19": "n9zF1AKBoCDdbNYdFzTZrR6Spc1i7mxYSSJ9QoVodGWkfSWSkSUfL3qovZvQmReUSHnPUmBPTRmsZ7QMwFztvb2",
  "key20": "4FV8DWD6PWoY45zijhCQKFqWDZhXD34zRxi5oQhU88VQ95cHJtv2Fz5fYv3MsfgccVmWvLhugcxUtLoUMh3TkoN",
  "key21": "622UaiscUbZ7TnCNiVykafWiuZUrHsb2stVoUS3zcu8s7rrYQV9B7qpC7rSfmLWPs2vKRsUZ4gpkZ7R7jMD53MrW",
  "key22": "41LNdy2Zr8hX4ztm7o7L71LEL6UZB34HBc45SgwtJSKqnHvm3z7KpmkGieGRBVgcF8Q4PQkVMpLJcJQ5UEcDyT8C",
  "key23": "52AduXxMe3TUS22yCaweasg4qVzacYxHq3MTinhnpdgyJxFWYpF1offr2Bg2dErt6Bd6bfjnbQPpL5JHcqga99D6",
  "key24": "3v2ohL8tEjtRtbgib5ZjmKhsGui98rtUGuxdEmYRVtE6Khy7hdBWT3mmtQGve9h8JBfGwvWb1B5jNk1c7kgJLgXm",
  "key25": "4if6y8iGceroixUGCrT6mxFg2c7aD35zicbwzgKgk7yHmB9HzrdWVcGuGTEsSxsZNbt9WcT88PLegWv7RMw7n8pd",
  "key26": "3LBSZt9kLc89AzZQZjisLDGUrJtYLA6Q8mQqdiVZLv9EREu62F3wJpww5uYrCk69VEkQj2vHujaNt89sQZ66bnq9",
  "key27": "2ap26YAzwpCYFvWBDyLqLiCTqPPAwUz9YYyBZrKS3wHHSyiSjxrmhUWgp9C2Vz8GAMfS6FrjzRbh4iR13AKrqKDV",
  "key28": "47KNhYetoxfW3ufq9z8T5A5xL2bwhjKVKj6yFXtxxgWcb8AV2QxeWYoquErBikiKYxkGrrumqik6VbhUKUxKknr7",
  "key29": "45QW73kA5T6J3b3GMaqQr8svuacaBJCezHEZsurZaPoo4yPKX3CHVwqEvU3uBUuKoZDjrhARiQiLGP1FC6G2kkB2",
  "key30": "4GvYN6URALYckLVKSqfwvqY5dBgrM7LpSCXSMG966uVybxWG18cJfGu6usNNdVL6yddbnw49tosYeB1qkjTmboh3",
  "key31": "JKKj6fx2J9ftz1PgKzhSjSFybXdeiKeBJ62hRCbdzoqq6SCCf7c6mnWbgg9mH2qQ7AuurRK4tp3SfwturX2mDcX",
  "key32": "4EPcJV4EB1BDjDqkGarCwhREFx6zvK4Sd6i37DMk6QxyFMTFFwkWpzd1KjVoa2Z7qM2eViB3o7De82HScVEgasbA",
  "key33": "3UoXUKLuifYqf34wqwosPDZg4yMdo8tUoXFeuHaFF8usNTCSfatdQTaEHfKEJE7Nqnrh6Z9R9FJRMySWnKPvfVUg",
  "key34": "2oH6bbuRkYzT2LGeDUG4Pox6iz4FPUHRp4K8XE8AeKnzRCHEKBagXhWsDvtFjbBTA9B1ktVqgHUGf56waFdGubXW",
  "key35": "2kEg4crSkmD5C2VjcS6j7V5z614bnshdft32VYzJwycQPg13G8pjFoW32EJxFrA26FrM3EnJCeaZVThkWSnEe5Ey",
  "key36": "2yeKa7fwUYAF6zRthaJHd1EpeFzMsudALnByxPdYskNTVvsaVAbZQfiHsmiDNUgKE5soWhQt4YFWLDjEn9YR7ZAS",
  "key37": "34xCZFqfVY8ELdokRSVPHu565LwGWD4B7z7DGdn28uQayGoh4BeYyWigNW6H9fwNr9CMu4Dd8EHTc8VFUKRSZy1s",
  "key38": "5gxyKbwrifc619dfVmtBfi6u9LiYhgpKrdbn95GimFiJYvowdkcS76Mgae5yv2LjtaPoo8LbGxDjBDdPb2ng4nXE",
  "key39": "PcqxkNtnrRDh6mdSnxbSg6nuDy9xcVgwZ4Tf2gnYQM2DksKZF72ffLy8S2dGxb7LoXFLh6DcB4objYaTsrHUzrE",
  "key40": "58EyoWvA4cFfysFjyRCoykhXdeyFM5HGjUUdds9xPmcCMNmYeMyNP6RPDrDvc1f28gt7sEtGNy5NaJGp4SjmPQVh",
  "key41": "2Zn6DHHnQp42pFH8NFnpgrd8LCMeKFdsKeqbfBiHZiRX275xAvuGZWReobKT59m5GkmW6RUtPcEDSqBewgteufr3",
  "key42": "51e8SaRVmzJQc6to4U5UevhwrqsM7YhVWLZh87x8S6FcVAbW3eZyiaFdypXp5tNdce5Fk811Gr1kAS2aWFgc8ctT",
  "key43": "2LEDvrDDtsSiCUTcmLL4LLkUdDyRPArCsXBgXBr4Sr3y2dvXVqzR2LCJ6BEGErcb1cC4zLHHF1AN5b3zANC1h8s6",
  "key44": "8HHqqYFgHmX3suRZbBPhKyJTGE8hAvXaxLxhyKfX7stLfWhXjMftTSKR52AuRDWpMdE1vz2sxKiAHF62Ci972pg",
  "key45": "4qDGNTfxRAw9X52YgR28SCEDENwMZPNkYkKSzfWZCTUdmL8JKPcVZ9BSfmTEw76d3oCy1CK7B8iZwmdHNUvegFHe"
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
