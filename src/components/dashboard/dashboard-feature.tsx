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
    "3LVnPPtjzrsv9NCoxkETo51ifcPW81eAXgQoYi7o9HACD4Xy3DaSzZyKngYRp1rZK3wQZs5uHHzLmGxePHqZBJk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eK2SSyvJqozNom2dr3wT19SdThcFErwErrF832vPCUgTpYNdcT13MusJC5hDnfo95Lkts9KwdzdjZjaHH7PaMLh",
  "key1": "5anU9YZwaDX6ug9na1wWz2apuDmSm9d986a9jpLTyNkozHxHf4KGTRNY3YYGpeuvcXSxcMzuETX1QxXuca73qgPq",
  "key2": "63Rgq8XWQN2P3yPQpgA5Aq7cXthMaAbGTr33hm3wMfPLhp5xARxgz6CTbguXSmhSQeigPCURCkqXRsjTh6ftG7DM",
  "key3": "c2L1CanbdYuF4TuaGgzz1UU1ZMysYos7SoZkAUhncpR4yKM7gCGpFEMXHz6TZzvtgza5GGkiiL6zuXS4FMnzck6",
  "key4": "6VyYe5kh1KvPYw515UisViSKGgXQ4rHgia74F2ae5D9LES3h3Hi3jLecQDXKxKWKA389r4tmQxYadpvxhNXy9rX",
  "key5": "2HTNQAZ1ERJqYG4D2PV5YMuemDvjU3Jykss154LTEsCdMdV7MbPNipKKYMX8tcRfwf3SFX1ScRGnLCBDfi5LEN2D",
  "key6": "3L5cFcAw43aWo5mMWbZiMfCRhwBYvJ6cu4ckGXSfvzoEtdTaRm5K3oV5fDdSbKESmucLQcGofJDry4ro4vtij1dP",
  "key7": "222pZvKAp3ttKwjtdiAPf7uBhZLdurr98da4zbjwFC1dUHmg223oU795uBCaSEHMnympnYy77CNiHRKgZN6xcMXS",
  "key8": "5wd2dQ5yXH5ANfmcDnvKqsYPBC5i6D2Yc1h7GvbaFSyVfqY6KHemhScjiPNEcMubBtZReBj4gDXfZ3kJnGtTGJDy",
  "key9": "45kNDDyNTtLTEVGK9Pn51k549H3yNE9LJoWmg6BFY3yknNaemjGKC7RJXhWkYacjE96HEiERVWhV97L2vTXe3vCY",
  "key10": "3KntVjVQ5bGSEhYELFqZBuG7pmamCC6PKZo7vHSA3TgixpnNzXKBxm64xhDMvqJUcfdxJZN5YGngq28o8ZZr3ozS",
  "key11": "3HvbiWgX8BG3xoCr5cEQFXRC59LkeCRaqogsLrqbbBbFYJLbquzAbCNEkCKehGA7nWnE8LWx89RJES9S1rP7PoNP",
  "key12": "Dn5V2ijwRGEq2keyJ9qxW71sbG9SbzEJjp5P9TysyATtcaUKUb4xUUDKSZ9fEaT6wzB3vmYepAAXzUxfSZQFYoj",
  "key13": "3T4Tr73jBQRJ3vFMsy5PkFQd31kmmvZn4tMusq3ocYFysCURgXQLJ2koqftEULLHXoByA7qEXU5JVcXT4RKtD96z",
  "key14": "iPUQeoP2jwk8Y2rGDXwb6bitWyRsEh5JRhPAeESWCt96TqLJCToPyFXbKupFyhAFkvP1EFnF41MUTJeSP4DH8w8",
  "key15": "3wpSMkQ2SCKbZSY61VYP6iKJXqdqHB2ZRNiDUVh23xVNsDeLe4Zh7PhfMQ3mbfbgBj6CKj8nN3HVxkdi8twjikBJ",
  "key16": "cWxfw94BLjZBYyfgA6VhpQgyAeN2ojBmaEcbjBqqnsy68MBDhwqKe5jpQcKmEirrHYwuhnVBM3ZutGoHwXkW17M",
  "key17": "3Nffk838WDMFD1jh3CyoBAT2Y2LrotiSsjQn6oomSnMy4V4LRxurHRGn7nvskEHKtqz9pfVfqjdaFGc9r9KEHMCU",
  "key18": "2skYCqGw4CDG96yGecdwXWD324fYPoPMtRXSJeytbBihvU2oek68FCMR42PJwB6oNWykVP6nppur6cEG63SHXSeo",
  "key19": "3h74oNjQ1RgHPfawvws8NgWHZCjCpeLt5a2LaBSiYBKAYZKzFmdTs3rpthsq8V7vpE7n8k8AXxrD7bfuAimnSrAD",
  "key20": "5RWkd5xJd3vZTMQsdYATFrefUHLip5swhPnthA5XsoXVqYHPxyGqr8EcZkNVtFnkT9q7rH9La6AxsbBmcvbHpKaW",
  "key21": "4pziTzVARRuRpeJN97Vzbvb1meXBoG6vHbqHbWARLGYUKLshg6GoSi9GxzqgyfTkyYeD5hsRxRJPPoE5Py1TxTBA",
  "key22": "3iwYFFeZpLJgNDDnxx1NCdbDg43UZCGENtM4UkcKF4QVjYWy2vw1w45nAM1BtEPm8KbXMdjMtbn1zEWNonXQaoFv",
  "key23": "3z17iwukBME4Fv79cSmvyTKH5cxfh15XYFuBuhhXqB3KS7ZudfMmYVk5sm4NrgNp4rwHBmKcp5K7EWD4Jp2W4HK2",
  "key24": "2sTxHYTiVhq75AcvfsJeYd1rG7LrLDCfUxkGEsEGaJnqWbPYjhd6YjdDfizn8fEGT297GzgcuyaFhUHEy9WPLqGG",
  "key25": "zF5Feu7z4ddfQZxtkqphS2mgaSghYKxzHYcQXJhdbHwSfC5U1EKbi12MSdpv7c4m652pY1jADavAuV2h5NoHxUf",
  "key26": "5avkSv1MnAKqbGqHNb1SKTGnWBxrDiKzC9NnYmmhG6nxNr4YK2AyRuTB8MxtuguowPNNHjLkkWgMrPTpBz5Vjr1Y",
  "key27": "5x91iFNMAftacu283AzvGpdsoWC1RLP8qTLjiKGPtD5E8KrBpFvH1LALD7Qf5HQjJQewkPfRgnpNxJQX1ELuKH8f",
  "key28": "3B5xxHiPTTPyhuozgnyozW8KhrcchV1MRsj3UGiZMm3eNuvL6EMyzQv58t8oeQwcBcVZuwsXsqjDWo1yp774KADr",
  "key29": "4Sd7fBDUDJwt3adoP2x2nfC3z5sbnmnf6wLAWLpaPADMh4CenN4TEKzJ9zKsXT3p1L8Armtzzigh8HW5y2ReDRUb",
  "key30": "2ZWxxH9zWLqTfQaZZVjr1vHMnPQja2og676gSzEkiY1fwhGWe3qUNZQQzX4napXMNHpb5EZF3VDQmrFAUR5iCEts"
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
