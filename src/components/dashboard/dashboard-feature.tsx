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
    "58SEg2iFnUFek924tG18YXEUjEghYyj7gF3z6RKBhaomrDN7sTGMHZRxCmwe2TzhriYGBHVb1YrBaNt85vnqASVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTy73DFsQ3JPxwwrT3Hi8RuvDMUHSiRf9REgoBsMw86AdAPMYMZFqX5RyhXKrnMtqjKns8p7wUTNcCPemvTX5ef",
  "key1": "2rbpLu9sqb9u19vFBcZ5aG5q1VVwLSkbgKPTKstsp3CtyppwZW9hgabMASHVD9BuASCdvbzfPHzJSaTuQubAqr5d",
  "key2": "JrMbqAtkATPpSFo62Vp4o9iiTe8kn6NEms5YJM7advrhK43u2hNTnPXSvhtMyVD6jtFxUVz97YnEMSzvGrzrgXY",
  "key3": "2hYqZk32krF2ow3fDiigUG7pPFmtQ7otw1YZu3TbErqyK3yAVPJ6QGkiE61MGmp8RJMcu31DWV518UYqgteKsAQD",
  "key4": "3Bh1VwFhfgffXbiENCoDwcwT9zChSKmksyp397r8kejyiTzxFkNqFVeYvvqabbomhcHzst2i3w6W57tzGGciFHhG",
  "key5": "58WMzLcRoywpnixBnrQsqy2wyZWjwykwSEbFgokq9ouEmENnG3NU7zqz7rBUbRo4Y4YbeMGBHJEditBtvpA7M7ZM",
  "key6": "bd4Z51ixWBFBfHMLSuUPjs4yFoMHRr8WW6zyh3cZXsTuU7YYFZ1sPxq12gZw89USXA2wWhxTU1xoaeA8f9Ff8St",
  "key7": "gtgaar9qyKSTuEZniVe6TsJNUD45mrTpu7G5zUum9UNweR929ez5P94yu8B9QsGVmUbYVVC6H5jhiaQeadYq9Sz",
  "key8": "5USNzaJzs9vsGrv2tad1DpjFCrAqC7NzkvBKQqLV3yCxVS6YgEDyZWNKoMjsMzJ8bb5R9oc4X6AUcRgL3XDVVFiz",
  "key9": "59EoiADQKDyY6xuth1GvjL6cPSwa5ZPNn3wJarHksXc9PsfPojCU6sZtEsGQJdzCUVwgrK7up6aRjuZrFEgQYjKP",
  "key10": "jBd6eQRxoHE4SutkTXSYhXRmdde51i7bYQdzQY7TQBpuz7H3wmkcMYFd5Ywt5zZppuzdEmeR6x8Ywm1BGEhVQeh",
  "key11": "5ttfsyKRUeLBQkNYuRnyu6iBZdn582iPowqvruXcHjvaY4DvDDixyJCz7JXicMhhM5JFgjPWCpWBFeJKXuLpSxVM",
  "key12": "43oP4y9fLQJwCW6QXAtg3G4Up9x2PZZZLjWY9Dwc9zeX4jK43gsPuxAjcUgm9DHELucB8X2Hag8nNfVMirQ3Hspe",
  "key13": "1RZK7pr38kpzkJKBHNq4kZ5D6FWgqM3WSeT5iw1DEpHjswHTwuXBEGu4678fUxd5BajfaAvZkRavWmGJZ8ZzQE1",
  "key14": "4726ShjBTP1AUsZbdG7kq2Ey7MAKXgLcqUc3mThEDedZMh64Qi2Mm7hA1n1oPSzcHPzpKFsDZZ74BrRUQy7hRXuS",
  "key15": "4SnjGjKu7RTEzNtiSws9d2KzwxBCcrfSHhjKzaVdbzQi289zyssaUMfuzV3DzuBrE1SyKe1GCyThchcFLrqoJpK1",
  "key16": "58ekwqpJpLRWXGv1WuAnjUt9qfPfbcJHaQC3mUX1rocd35FJ1Az6LvcH2Lq6Qm4nHfPA2agyT83oGLFTgeCzznAj",
  "key17": "2bcVgrjTYmYdwJUzVSg6vNs6XEdUcXuBUKLghtKuQdvyPAyb8SD9pcreRvqDF9pTDx75hUzKYGACLd28BKgPRVhV",
  "key18": "5aRjf586XEmpQCxUyoyWjMNtKRhDPT6cqkhU2mHQ8yRATVQ1WkmLdcMxEu5VY9agwV25agPEiLobZp4sMCQMikyd",
  "key19": "5BeqZ5kE5mcEWpPrPxaRGxiJAyoMad5xLTtiNHBt48ERrruvjsgwc4oFZVi3S8H64CfSz4nLxDCadTJrFkkgwY24",
  "key20": "2numzyFXtRCS99PTL2rrB1p3c2oYJ2vCeZLugUWnv3QwF86Qp2RQqxCTmXLSgGyRx4cmpa1v5nXZuUy7W6RfyE4Q",
  "key21": "4NAraNqer2oTXY9sKheaMxwrRNakJfKAnhu458efQKsGn1K6TgcXz3WepMFrSHup9H6h7GFtQYdXmV6vKHanz89s",
  "key22": "5x7SJtFobuM8BPfeWE4gbZh71p7zY8CCAkYEa6dQ5BaD7r3wAeJPVSekJe7xYpKtqTouW4ET6cmnR8Fha9taH3yg",
  "key23": "UsJvRiTBKbgnGVsCk7wt96PtuGyDJdfbqfGV5MLPrd6YxrunCJBryyPhtPLQtWA2PJ9uz5yaXXrJnmVGKLoKbCH",
  "key24": "28dMvSgEFFxo5Wusd2hf5BnMQSAKTmrJsAbFkN2Lu9zWfW8BdXfkoMumBsjoixTaxQfZPCFL8McdxXDPGavXtHUf",
  "key25": "5qrUuEekF6WEZ3qZUJe8uGXCK49G5D4WY5rYHdKR1FnN8HfFP6S4osMAtNB7oGsqjfhLZo4oDpdLrcuDXTixp2Yj",
  "key26": "4JHv8WKbtTiGw6mkR7LQHXsgyYdwFHSUEiX5pBpzhwtyF1ZobVniLs8y6DjDPh7LKeYPbhe5ra1Lujae4Lzr5mN9",
  "key27": "2HVcgzzwuwsqxEDeZfo3MJ6LYXp4vQnQ7qrCRUdMbvYWNESaiaxD964TKm6GhCRQthHrwWVLkNozERRfv4SW6JRr",
  "key28": "48XWYzE1LZpbxnX3bKHsPDoX6KC6EBJwb9r3b4ebo9a12DoD7oMSeB7TXv7CgwpoedXrdo9BN5xeMr7q5GgomQGu",
  "key29": "3ELT7CodifoBNb5G8r2mLtRf4kohvmjaZ8kWZnhtTJZynSfBCr8UKfvLxhimM5mPKzSA3MVi7dNG75YB8Bqhp9fq",
  "key30": "129gPbGBnhmDC8941rCaRHScDJ7qt7uGGpZhcGRC1vJG4mq8DTpenMp1CDaN7NEA7NvVTfcGqXq8qC4fwbRoUnh3",
  "key31": "3Cmg5LvkPfg56oVB1h3bMVTSjCGpPvKZ8HXUfpxci46nLFLi4mSW8e2bc9JcmKYLM5vAeARxuaKJR3w847TCnB96",
  "key32": "2Et9uCsQJqnFtSB5zLFcXXZDjb5JbS5tGGuk6fK8dRLU6n71Rei9CymaFHrQLFF7gUYGFHMUcVx6hVKvmXyDwdJX",
  "key33": "5odudW82C8UY3BdCQu7Mj4VbFMfyheSqBKTih8ifPsLyM75ozri7JrXXUgXL1VmtvtF8VcpcmhubXovaK8PntPCh",
  "key34": "za6NPpRJ9xpcFF2N74Ty4Q9xAVXCec1kVcYRtNdJbVm3JPbkUSuNuggq2wsWrFu3UJgKm9hju5fxCLBZLwMGDeu",
  "key35": "3hMycBEcAsGdUMXFpX3L3YxKmNnGaQjECTXBmPYrhtqpf8YXy79mg9cqFsrtPGxm9TFrYAuXL4GSN9t77hTZmRw5",
  "key36": "y3hHUSBcVnmhUVuStxvKK9sZZdAJi7HSEMUf3pGUKbqkgRS3ZjgbuAQyxYqESAoSCjoNv6AadxK4a6bHEuQZXtt",
  "key37": "3143uPZVvgHshByH38KMfGnnfSv2ihuT1EHiYkpY7wQwTDrvRXS5bLJCkXKcDcSxun45Wjq7vytF5sm7ZcGsSMpN",
  "key38": "5hUWg3G2tH1MLpN1V6MzdbmYxmxjtxG98QZtUKhVpsQr9EaG8gA6SHKF4zc9vthz7ZtC4dkwnvsKR9Ab6Ycpn3zw",
  "key39": "62NZgZgo7hX9khhPnLXJ8SKuufdj6JqehS7x5oMVM8fZ5YrgkHzM65zCycQJquMFgE6auQMbpc74bnsS9ivVXyMU",
  "key40": "3LAAAkU5gPym1yCSnNr98NwY3Srit5x8iC3oBvtjZukVXCc4XoAgsnmhwxcPAg5fdFjTmnENXQDRcG7orcNtRW95"
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
