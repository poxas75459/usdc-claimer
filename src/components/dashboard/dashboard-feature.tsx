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
    "shuPsFdzcXuarZ22Yy4q3KtWPuCP5pLRtV4gECmVTfDzR2hvce6LMueW46fmHirNUyUGeduWAqFy9L2hNB9Cz9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGnDpWToirn4v3To7Ss7cxXB256yMHuizMYHAPCbSLbsEda1oL42s46TNoRQSYiokrgKFpF6ekeSPEt8FPrVmRd",
  "key1": "5144aEuru8aU8SUymuec5anVpBrppV447Da8SxSMAkTXFbMnJfzA3Fg7WvhHeC3NtMjqFnZwS6zmvqjxbh6rekAu",
  "key2": "4ZvrbJzw4Q9FNykVphzSQj5jcygwXB6jKuxs3Y1TQggCDLDzkMPmrtRocCaeLmgN8b6259dDrv3tJSEi3rucx5iB",
  "key3": "3VQfnfjwx7mJ5PWnvNvJBVHw476aZP9zFV5RiSkvG1oWuzU9W5JR3VB8iwnmbhzWTXisxBuhXMcfpoNYzkSuzXs4",
  "key4": "3DTH7Pcp8diVW6D8wenPagSQZWrc82ko3cTyZZKdwVVqNUBpEp3oXnTsrvRXNX4vhTGy4bfHQ4csGW9NojqTNZZ4",
  "key5": "2t3GCiPLnMwA96Lyn6xc3H7z5Vuh4uKMnpsYA3WWJ3YvZFqgvJ9tVzzA3C7MokPrmhu6PoRFgZbd1Gn9gHtU8Xrj",
  "key6": "3ztmfbrQVF3BtuDmpPuidEthwrZPpdQuCaAiNWszEaX7Z1LirEsqF66dCcm3MC4rLDpgdx7TGN8rCGGxjBH1zVQG",
  "key7": "2GsY3pijD4p8uoVm2LRsy337h7FD9UdT6HL8PbGeB1E25JRwzK6cCL7cTcMu6LWNUkg9pfC7FfJSKxTk7FHgDQEy",
  "key8": "DW2DQ3yMCFoy5HhS1XeZ5Ay5if9ipZ7fQf9EtbaUdEGZodwdigowAVgiUDjEPfZJuDsPkpc4h89T5CSfRmama89",
  "key9": "4ELMwrnnLzu5zmGmVn1aupbuzAbdagoCPTAVt9naUJNcGKR2zdMQMjumYgv8nqoTLgcTx7gK3u7Xzz1Kdgo5iCg5",
  "key10": "43JLVWDvBYNqGAKAWXpV8UihF6YBTzxqP3Q3Yj6UPsPCvxdoYSrn9NomazLaPaMkjorj5zxuTkAzesbGFEUr42ok",
  "key11": "4JouAVShP23gRFQBDbbWpw1hFAnUmoa4uc3LfNBodhFrvhjNhz75K1ew3EeL6TdJD1hSsiEbUwZSebidHMqMNVtW",
  "key12": "y4rPPtb3ZbV76ak7GLpHCayc9ZmfQmPkfoMByQfzNrHQMbuuCpjgVbxWEGEZBxFjgt67ryzKJfAoJJVNpudQMzu",
  "key13": "KPgDgad53yusj39CkUp5bTiNzK9ktw1ZDkpVekxXdwhkagATasSqP3P7DBPM7ceMwsAifGkpf7MVrupq5irkGNs",
  "key14": "53YMGnKoW5ivEyQq4b23zHgLA2oowB9Ley8gfY9avBVPSLEBpmvyj3ibffYEqcE4tR2k7Q3rNTkPeciQU1jN13CS",
  "key15": "2khPgpUNQv8xdZgPXYwgLa5gbDbaDTxXbVSWbbPxiWpe9upbBnDMZuQBMUskb8mp7yguYbBp5ixSUg9aQQinYGNe",
  "key16": "2yaA3CRXAhqHf3rRPhdwoP66RsuQDjTaytACg6VzWKLsrhgkxb1PbW8WonktuvH5k1VnyLbcBbLZSD5q7wyFH2FK",
  "key17": "2gR9E1NQXKnP5eeBzxbQHLrk1nDUgyU6WTpWXcppdHJeHToqQjmWBW4HmNPJ9kYLcwgxZSYXLAwLMCJwpKvCHFfh",
  "key18": "3z9v2v1u8S8Q6bL7NhAzo66JFV6M9NCo48WFE5msKkT8npCDrt4gQi8NrTUHgvVxdpAkG9sKnbJuMnURjKWgnWjw",
  "key19": "468tFBckXhvUwKFajyrUNVWf8KzwZdD1in7Ld4XjYDEb8LgPJ7gfy9aUFSNJZjttuje85dgPR5ZPZ5PU8DXAhvKH",
  "key20": "2e8oW7MVitFUHyPWiR6Rxp5RNd3TugDnYqkxP2UsLX6t9gyU277VbNHTWS2TgRBHvCPND6W6ehqpURHZ1BShK8JH",
  "key21": "2bNF2RtqbxDu3XPKVqhfvZaUQmsGHtsbY3yicpexhn8ZkWeTKkgYVKpRAr2ER83cq1d8an6jYYNmddnZiayxT8Nq",
  "key22": "5jgiNU3usSWg3wFC2HkkhQ1vkvWtKtcqEukbJoJsSY3YnNGV9a7E21A39PtABxv8fsTbmJG5XYuvAcxEU6YNsNca",
  "key23": "5UrK7xeS1vEwGEMARn1nVU7qWVmEy4Vh1KUSijoyEQM2Qi78SZ4WGEmWnohFoFV2sk8VeF6ok176ZrmE5UEwRfqj",
  "key24": "4FL79MXcZEpGWhAb638hne1ZVRdwsfsZevm8HoWiYfthfADQr7G5ZrKuEUe7eF59gpoaagAc9sYAMYyJdFQmFJzU",
  "key25": "3ThYZTgUAhnu2aFCAeVVKdRQCsbegUp6Sv2zrALCfk8iXbsJd8tNuYSf2SqL1eKEBgiXgPhVvX1nMUsnjeCMFVDr",
  "key26": "4c5Y9rhnLgugvMa9krUt7LnpGJfzawMvVVcfm46GbSFJ1Dimaxc7fhBRQs7uDpU7qzynFM4iHDapYT2pKzHg5514",
  "key27": "2tTD5vPTT6UPGnNMYti36dRTTPs1jf6pvnbBsgVvSbwPxy8TXMDhW1j2HsudJN7hfs5iFpfhPPt5S8bY9Y9xNPWy",
  "key28": "Yetnc3kyUkv3GAYr4Ad5gp8k7EirSixYDKVC4MnjzjKAnXzjKxWaKz1Aj5ckNuKKjDgRuH6nYg5zbbtQPiatPps",
  "key29": "2cYvGDFwe2mmDVQzj7Hif4mbvfnda317Bm1oWY8ojWMjcGHpiHjc2TkBagLgxWFQV64q8vJM5iZ1LZnwwwCb2pt9",
  "key30": "gmxgA56qrPEkdGbbojjX8WrCxXZQpiyz9o7hZckyHskDR5QneyB47MLuvR1vrj6r92Qp4kmpCzmEWhKBM5G5YHs",
  "key31": "354xhCKN8bNWfLD1g27ficpihGv49X3VQHWFEiyBjACpWyaec4jT1wWbiw8mgGvp9B3cT98gQ2KLY44TtYnc6PdT",
  "key32": "4hH3tFFbtWgZTE6wZPcYy1AfSdXiUt75JDpNSssaGUfhCqiJLxRersWF61LKcZRA5xSF3WCV1QkSFqdvx8nW4Dbs"
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
