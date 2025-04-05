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
    "5LaoyG9ovxW4phH8guYoWgic8q3ehtNdDcjP9vJpNH5r8G22TPPvzyGZa7Xub2sptT929KuysgfZzWTbGuUXrG8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjZMefPHaqFNx312W3vmzAu4mrNjMAA3MhDMGaSGZLN7yryTMd5gX2haMTVGz6TCig3ZbBZPZBsGV9v1igpcHw8",
  "key1": "5eLGrVtuRYkHFfjCAkD2aeTZ2Q5qQNd9KbAXLCXYY2E2cJzXXTJBxRCyNwTxuWAhcKWrV3kxQujRgQLpeSsckNvj",
  "key2": "Yebse615C8MyfrZrD8N6SecScjPxPdHEX1vWF2VXZ3ykhEguJw2vBYpJkfpRk7oLMuoC3HczmDUSaRA7L2Haihw",
  "key3": "nwF5tL7Sr6Ps8xWDkoQnwLnroefaga9TDaUvtBjYYLDygvdoAZyK1ZA7xXWuCF9YcfBBFZPxcoRCw4dehBWgjtk",
  "key4": "58uPEn5KxdxeNgNzGRh9KP7HfWQM8oFFZiNHrTUadH44GKLRoY797v8yMbMAknqbjMqMEAzTJHR4xET8emTSXwgH",
  "key5": "5By2u6mZPwrzgjbL9kh2fWCWtr4CM7x1H5veDnkMb6hhVUr12kCvWwgmFppxxkxRfff2E7ujPxC96cjoifRt3KmT",
  "key6": "5FJQP5YFJiu5H7r4RnMqk1GNRoGcnzguRoWD8P7YRfvXxXiXmMtCZdvx763ZpMS2iABaTGMi1KRLpW5AktQMFNvw",
  "key7": "25XDymfKUHW1eXdiXm2icTHHtEYZo1dhoN29BJqfWU9eFwnwf2JVNnS3ra9ZnHuWxF6Vk1tikEtyuwGzsCqFf1G2",
  "key8": "54Lri7kraZyBJKDH8iQFhHBGSrQrqGGgN5Qd1752gtxSY8SW919hDAojzgikXxPoG43c2saMG7gFUVw5TUYwHCAB",
  "key9": "3FvuNFZJCdGxToXiKUTujAVZzUgKVDGJMLRrqBhX5mRqu5BLt4biF6EN4SmpVZjgD7xu88X2p891LZyv9WnZ9xM9",
  "key10": "2iBTraXYKF2mhfo1CW5js915marXq9qVFSmt3XSAQfs3YhfShkrRhytVaDgpyq5BdRpYxFSteAUkiRmWKmKVVs21",
  "key11": "3suJGi9UQ6op3eazx8qzvGm7caWFxLj7r1RmzY5mE6oKaVmgwaEm58sBkehBshTmxxfWr7bMj2RK2mQaeEMixWj",
  "key12": "39WwGd6XkPsn5agxDX5jp4VjqME7awx2YqxAq3Nf6ZFnRupapsU86aXuNqfEtpWaGnksFWZT7stL3td4x6Hw5d8S",
  "key13": "3BXCHQUGtfVZJPLZoYM3zXub55ceuTiTfSPjx41cwALk9Jv8fzCqhnNxnCjj4rwnZoDmyVERny8JvSYXqadyroei",
  "key14": "4fVqr5ppG1ybpQWfWjqfpSNCbLgyF7gP97iokn7ctXFS4pmpenCDGN46ybexhSyxTetxHPEhmTpAQxAu9b7wuRqh",
  "key15": "34iHR9DygWcMm3gjtXkLYqSvw8BzYToAioXkJZcGpoFfttX3MGpJAVbBUJ9D6tyDb6G2BoGCeQNRpQQWbMLLZCBz",
  "key16": "3ogHAh4dNqdxrAmT2MzaJsEsC1XAiXS2BoyoeukJku8CBnasgrogyDBindkdgewPaMkPceQuzLvpfTY4KHxMdiHT",
  "key17": "2VTzPMy1G48HKNRE2ZKRmT9jihkTPEro3wwtwxPTBrnqprjoECh9sKLUuYaimC5hHDBKSA9DkqLswhjyTYn3hbMV",
  "key18": "56wyrBoHmXkJXZnZXrTmqNbWRYgSq98ysPFUygi4tw7WmGP7V1dHfdVAzw32cLVrCYVw3veVMwAQp9F6YRc9GUG7",
  "key19": "416hfMrEjSU953c3J785JBbJtzAaqnh1YdHQGpMiRa2Xhdf1MC51GnXEQajyMN93SRnuyAty41EanguxofAEHPSa",
  "key20": "2azHkxBh9T4h2N7RMhRqKHmSuC9TwKkvj9Se8n3jpZyH6UnwxcriZZebHf1mREe7tTzmYVYC3ppviYVhZaisjQDw",
  "key21": "4279ntULqDdjHHCfBYFkacDFEuZU1s2iVH6PB6dQncP66xKng8NWLKV8fnZ5wKRB7Y9E7rgjh6E6jE4rnjQWtCBZ",
  "key22": "3FDTwG5qBdgiuyj2WcYrGYjQbHnER3yk8UR2jcFoXbPyPnhPH8zWq3ye1Hgkv7T9FDFCW1FiC3GnCkHN18sopBH3",
  "key23": "3TvS2RDWHEm6vcRbh7ek2bdp8eoAy399JjedgDAtwc1GjPDhyfcpZ4vksh4xKCe6duKJ8iw2o4SfNJTfPC4vGEdT",
  "key24": "48aSDEhkmPR4NeYiMQ2Ch7sNAwnRAKsLiyrRFgHkraCWjx2XHtchtXwGe2NmhMPPHkzHSXUtH1LQ5v5Mk9ojbxBK",
  "key25": "288vQqeLYrtvSnJn9FkDy2SSZM2kUN9xHAFpjaQpHFGt9yiUAkN2z7cTbr8noBSp8d9ez3JHwRoCojE5zGhFSvs6",
  "key26": "5rKBkDA19dMLWgyosKupCU6eTi6MiGbTKgX6JLjLxgcnxz4hwF9puScNLRAByxXpu2RpyCqzEMVtySERxpi2dg65",
  "key27": "2kCzSqomizPC3veH54J8DTJepMzfrRqhGmJbygRKXHEmZcm5R3g7muhdkLWYQVUyqwP7QUrF5BQh2jaFaS5wJWvz",
  "key28": "22zfUDFHzmNsB6izwZ9WAzVg7gcyJUxynHj72faKYHen27zfvNfnzT4HoSViwEdZnypFQkEx2dxbt2VM9Vbi9ufN",
  "key29": "5Tb5YLUQ1ynEBWutss4xgqzrMcYnUDEokWetAZj3WL38fF2cnbJN3Zuwh9QR6z39LyCKVLD19NffEdzC5EFNUEzF",
  "key30": "5KGJDBd9uCRPhQgAN6ixYcGDzMMUJo5ihgRyh31D7S8V1uDmmFJQy2ye8A6ZzmcJ1PPrnrLyvCLH6xm2RpnwWqdT",
  "key31": "4JA9T2Tu3iq2XSEhV5YpqkBYJFarYaMDFre9FMsdpwp2iXkZwEHTBwS1NeWGEBPTnWs59BQoDUudfaDsmUR6Dcfx"
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
