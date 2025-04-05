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
    "5VH5aCRsVcEZEFB4oNasZszkfgVHeJDDg1yyT4K6LYmWpKi9Mz9tQoEd19N4ofHAHzmXRaACCp3jS6tkdfqWp6a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JjdWMH63C8QPmu4cDjUCXvR8Yphkrkb9MFpL7bqdn9HpZfHYhVRqG8CWRCWD5Rhh8rGQkb586JbtRWqwU3ynWKe",
  "key1": "2FQM5zFo5Pe2EJpRteTstBvE9zyQP3gteCod8MQx58aLH9ZEGGns7oHZo5nVEhzQFBtqkaFMA4kEttm1vkxsDhUZ",
  "key2": "L6hxyaFheyiT5mKwH62DdG7JAqFdzuHGo5j2tE5KcgiSAVfA9fSvo3vc57uALfkF3VdpHfLhop3HBzomv4aMM5M",
  "key3": "J3zqHMYx3WwHmBv1ArdYBW38TZAHdS8feRUyUEYsbvwTecR7z6Da1qD7aP5n6iPRzCWnd9vpn4AxPpWHfQMJDbA",
  "key4": "4HCCaVRCe4JQrPVV2aNFnNePtUUMKsUPbMHpgCnW8iykDYH1CpnQDpZpRoB98okqssPpE3rNRU8QaXyGoP1S9oYS",
  "key5": "4QgvYGZsvJUuerLThQS6UMgQP6FYdowZ6j6yVB4ydSWhhhU1gKNPu1aqNbo2PewaW95dJB9wdetKXTovYusAnaBE",
  "key6": "5oc4T5ZfXzP6GgUqmEMaXiMG3VHqeDTBrhJoVRNzrwQ379h5cP4yK8zVZfNuWXkzvTKofE281TvNDXLiFRzcrduQ",
  "key7": "5VdNTsUsGGxBQC2kbPLoegWQRwVPhVqjS4SN83xxr3ShyhqepPyy79TkKPLbNMefSjhhiWNGSBdH4bk9nxhHuCGg",
  "key8": "5zrYCRXzBBUB6fPKPTERuPUVFF9k6E8XGmaGBKtuaPSDvV1yY7MwhNqFJLHj9MrkbvT9sQrtsQFvo8QbP7biq6ja",
  "key9": "MESmjL3NHsZxTmHnHCei7YW7xxqh1LMYxcyNvhrpdU5iNVZp3f74n42uiXHzbnEJdzzxn2imHob3iranFBEZLbT",
  "key10": "529dfnbaKF1ccgff5YBi7vZNFfZqgou8SK4NG2pjRVXU653TLYGKverYsVgbjhxn68BDjZ3jS2o3YGkWi91h8aM1",
  "key11": "64bLZJ5SNhSDiZkdi1oTnHwAnR8BtBXHdkByEaXCM9xVvKxmo4Qvxbo15iyt5ZH4jiKUqpFEMaiy7Eyv1JDgNgMf",
  "key12": "2JPiqUZsr4AGs85es4diP4VyFaNskDYAMVX57mwx9AAEC1u9pBRrNVBJ9v1W97aUMhVGDHkfG94ncfbnoFpXJ7Xx",
  "key13": "33nAPf5HgSfpXwjK5SSjGFefHjvFjum3JSFiByBxTSa5uNpSykrrmyxYB1PbDVRnHGdzQ8bYrHGSrhJpgeirFWWU",
  "key14": "3h3Wt8jhGcoFmPB94hi5iKJqhdVmaiWT29ZqAHU2VzwkBSbHTMC7SJdm2GkE7Fgvz7UUHVdCJjKadtQaC7rovatM",
  "key15": "21NNs7SPGkRS61eECeEipSTxDbhexJFo7mmotQ5gB5VK1Ya8Y4NEmz6HHCpVz7xPnfptrKQu1JNJtZXUm3XNfYJt",
  "key16": "4Ueh5Fyr4W7bdAjXzNwZXXPXNTr3a4rHRQuWXLW2WVCHhVxXbdp6HtpvWs5WByNGjrwP9QY6MetjW5zYK6hKUp8D",
  "key17": "4ajriFk5GVZNWJx7iUjSEZS22AFspYKQjq2ANwZNJ25uUV6PM3mYgDKKZSZueT8k2DaKsgTSiEeJxvsX3FEN29AY",
  "key18": "3beEteTeqY8U14BhDEBu4uNBirSqtNmUH7jT88kvhPbntjTJNbRhRNhWDpRszsrfzEoixm6iAgPp6c7SFXnUCnpT",
  "key19": "5Lx4KopPBv8z7by1d7gwiHYcbKKRVQzNXFfB5pRUN2ym3d16kcSPw8saQaU3gLNFgdUsMtKg5Ac53GKngacCwB94",
  "key20": "4RpmYvjiojDmAZAHtSxXyLoaasJqAsqnTtcSqo8AmStvu89ncmLvxVBwquLX41VskiJYk5kCoDgfY16BjaxPbjx7",
  "key21": "2qTXoW2Uhjdq5zctLUFc6JjD4Pc76Qcy86vuQD3ncLRuhAyQnVr69Z6hiXuGWnqrt4L2rMoMu9hQDrcrWNm961ws",
  "key22": "47KDUYf4cTnKjzmUubkdaRYjpcBcWTmC92CvQF9M6HkdFYXooZbpzGZGurSLSYp5S3czgnaG7WzSEYdWXhyg4Jri",
  "key23": "3w7dBJCKLf5H3xLeVxKZcXK9ZJoa62WSz4fdjHEPW5v39LjF72ZihX7tJaxpp21NacehzWz255H447RDrEXcQqnF",
  "key24": "4BFrrEQNS84y7KSgHvW7msKL7DXinjW49LeV5T37j3wXpiVXZxraHcpFEQLgtxosHqChC3s4SXmML2gqT1wBynHW",
  "key25": "2fNj2Wg2FevL5VxwnvMGwJ1d4js1EpvXpuWAwpzbqmGYUc4yuSdwh8JdiNoqCEtULUFrtR8NCAuJ2zwA2HvU5K28",
  "key26": "22AukmuGP3LSFo83PBNVtAACazKkiE7Xw3TNPPPJm4N43ovd6CcYJu382ktG4coLpi6PtinyWvZf3iPBEZqTtLMx",
  "key27": "5n8yPig38iUhoTipRb8GvSFHqDkFE8tbBVQ1ghSJBFnffEMB325ykpSvR9Mpfy3q3K9ApAprsiyPUJZYzehMo94U",
  "key28": "4JhxRqjsyV6UEJUhztuxVEN1R9isJ4KyJ2FihZgko3AE47A4PBkqBJZepEAbZcCBi6hA2qxrpvzyXqspiUbmTrhk",
  "key29": "51vBQoY1jK4HLRRUjAWxwbSfKRQijKCFN8EjxfHUbG93WsawYEQDkc8sux7iXzxY21AeEXMBAkSgE4opL8AHg45i",
  "key30": "4gvJkTge7T8kUm89vAqYwjPDnZJKFH14uXDpb1a4aG5gorWYKdBBsnXbn9gose5GyifeK1kjAtD4LfYrsgdfJvXe"
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
