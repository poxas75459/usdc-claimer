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
    "53TB41ZBx7XBxaLkE6rQ1VFkKtSvMCfeyt8zkyrJTW96prT4NZDiGM11F4j7kYcoFTh96tYxYruuSdXC7Rn5Sy1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vz3ejgkrKY4drq26GnVbvJSYuZx35BcwHNpfntAKZLH7kQEu72SgtfVzWxM5zwM8Muxtw1t2pLKVPCXfNdmiVXk",
  "key1": "5Qo4kxPfXCCxjxmuqL1tRuc577D6VwHHFdErPMBkQLvRpUXcUnot1oHMwELJuX73i5K3GG7WXuHpwaWwqSGJ5qS5",
  "key2": "58hmcbQVTxMPQJuQkmatRSyATrmtemxawEMqUGSNNXD7bQyhWA8XQ6k2ke1SgD63kMU19tWnX6uo2dmT9frmL3fh",
  "key3": "5XSf7dqKiDfivdDnLxSgeQJqWfzeoRGK58tb1eehTbRh8wJHJPoiPPjWbVKay3VLTEPYzjDPwimGePTHKr3PSQrg",
  "key4": "3AqWpyqoJXrWi1Lxqqfno1UTZDg58RAn1hZWPUBSfK9UpQ6eDL1Sv4wbm3wvFNwByT9HyvdRKXjgykFN5vxSC55V",
  "key5": "2xbDyR5GFAmzYKCd6QXH3McXpt6v9KvYMS5nCbqmVyoQAAPUQ3dW3MuG6J8qdVKk85Z9mMr5PLfTu7CLQwvhfmrX",
  "key6": "93UdYrwdXmFHzhMJzycrd22PwDGr1KQwg5vtDj4qMqB1tNuAUS9LqewSaDyovDW4HP7Qusr8XdZktmRRs84ZeGu",
  "key7": "ye1seqYoTKQXwni4SWYxy64zqCCPW1e6cAWDq8YrdouhqpCxCiBvgyaohq74MvyiE5njf7rViyY8gSzfT9NqGTQ",
  "key8": "5mec3Yc2FBjcovcQ6UciJMtWh757DkQUWxgaYhd3rs5nyp6FqMsdANjhNqV6L19SQWjUAjtJRKx8wtpWgi58PCg9",
  "key9": "5AB2FtqYr2KQfCNsRuoQi7NEhV9TUfGecTjocxc1wX1WTZjUWiRDye8qZwtqya737xp4vxWGPDHYfSXXPbVnNmCd",
  "key10": "5cvgnVMR2MQ7MXwgAtBW6DmEnchM9J1L955nShiPV1F7efRBvSoTiG8LnuiWuBYBBLKARiscVrvwSjztxz3Coih1",
  "key11": "3URGBFY1aJc121LSyQJKdCtEaFcDF2iYy9ixJXY7FZsN5qK4uYsr5UdYvC9QvRoMtFtq8UDh7jc9iGajFvm3JJDm",
  "key12": "4cM61ft6yBJBQ4pvibAPFFZWNLphQW6cpDxemmi45oJ9a9D4cEdV9yJNUstnwvD8N9s6UpP7Z4RRog3DLeoD6EQy",
  "key13": "2kfoKCAba5pf4pJ4WYdp2PbiiLvUdjaXSUEq7CssDQvikXfqujPpxX1t6w3AXf3uVyfLH3cCKVEEiHUmhUpdR5MZ",
  "key14": "3yKUt8NFAn2YySibicjwT4vCrMeuQRjUz1ex68mKBDpp1UZKYu47vY9Udi3Dqq4odmkScF2V7MnfpAmJu3tPg4Cs",
  "key15": "ixExtTa13C7RXZhKRpUTQTqyJfgHTY68pyx8tzUjfDPbW51d7U38aH1wZo6h9ue8AJLiSuBqzyipfXLKwoVqbUg",
  "key16": "5i9iSbzS7bNqqCbDcZegEp32QVZM6Cs9u5HUoLNKEmHY94ods5tygQQCfQc2PYD3dhyvrRm83qdwfPFnUYLFSJiB",
  "key17": "2wpYymtCZuBUntktAp24Z9nADhWN3cKEgQwW8SQmG3BEK8D5ToUZ5ew7oV7b1PRiqFmRQRPLXYGvpiRaB1ZhLjTx",
  "key18": "5HPzHsF6Msf5A8415eiaxJNzgCAJ8zUbEKaWA78Mq31V64XBNkdMmQ2adNWc6y24YCWPBWUpbU67Lpg8JyYSLEpx",
  "key19": "wAxfRcm9gVrbNQpBaDYJH6oeKAD5CDPNPU3FLtRcpxNb2XFhoa1uFeqA8UfevkwaGWJ7jBg21G5GaK8PKH3ab1a",
  "key20": "2ZuGEMLADR5JpG8hdRopjDFMsEcZTfmFA2AbQmccrv5Se5yJt27vDV3RR25po6i74YwEdB6p1YceeapKM5wJvQwT",
  "key21": "41TqbD7z7ayFyRJS8i9CVsoU7wdRFEU8vf62UrvQttthqMuNeZE3P4EDw2GN9nKkpxunnBKfwcCEwHX5kzwScR1K",
  "key22": "4mxW8GrTzT1TXt5iL1hBpG512dAYMy6g6CP4bvEtCR5ePV5PujvNvw4qFM8DWBofz3dkvApZzNdD5J1g7yz9ak2g",
  "key23": "3B4DGudm4UmAnSiuGNkeb9GQUEv6H37VVbj79rwVuE79Z3Gpxn861QucSQyYrsYA3v8w4Yb72gteka2LU4FVtzik",
  "key24": "5Bx84HPgJtE5xqCTUnZbk2iwTAdXh57dFbxZF4oEAjuoFnym7WJi1ufneK56ES37VnLpfy9fa6bVadtBF4hHgwoy",
  "key25": "33UsGEdGrSbSyY4iWtX7tfAgymPu7dHauAYKKzPnwxvHhtYXJBCK8fXrNtw9vHMinLYaHHpxeVZ7qjq7Xw5frQHh",
  "key26": "59eF7mi8oTDoFoqN1pR7YHPHU6MnDNysz3o6QgzGYJgxvAaPHS3exHHBEkMrr2ptDTVm5y464ApwtGtJiovWFzXH",
  "key27": "5XUH6nwdrzRiy49JQA3jAjP6NXDBf8GkxxPrkFHdHQcEPvVyVJP6pGeYnwNGT392bgYN6hK3LMpVRyvqLa3q4Vp5",
  "key28": "3LNa1T6e9T4TBqcZBSjF6V9e1paZFjwd4HSZK81fzMD3po5A6iRYEdQbg6bQDJdFPU9VL4bBc6idLLCaBDeWn2Kj",
  "key29": "5Qnv7avSZYH1rZ6bEURAifounYewYNVwC7w3gcV7UQcHRByj7TwPFc8bS9HjR46S8cp2NgYyckvib2jtxGbRSURD",
  "key30": "4hQqsnnQtfkqYD7hna2PUAGjTzR4Ms4K72qqdjQtEGCaspCuXt7nYQkXFp9C7bmHP1fynMsaUCUbwzSGg3VNHVkW",
  "key31": "4vBUeSsrxwnsnzA8Uk2MVLidvfAbuNpLCpt5jWdtEFZo74cGGouj7Hgdm8xY7YFVNzVjTCyMAGBJMMXBaor8jWKw"
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
