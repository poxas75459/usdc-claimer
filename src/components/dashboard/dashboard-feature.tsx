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
    "4PR96DwtkvLjig5a7Y69gK32zqw32swaS4yUtJX3iBKuaY8MM83WPig4JACVpkyCBjWzphgTiko8cXgKzYa2ueS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQZ5VyYiQsoQPNurSCELS7mQ8TjAJWAbsQaHbASLR49buCADo93CQjSoUVymUqvaKdoR94DkMpjNmxMPC1NrYbF",
  "key1": "22WNnXHYrUf7suczP1RMQiaMeZ6byEPkeaMyypGxwNqucHbmhuRkUqA64jNcR5nwCdbkwfJuNQKsvczkpYupCUiH",
  "key2": "4xKdDeDzjyLNnA8fiaVxMYKpinp3H1wR2iaUp7d1XbDgvHFd3DkoRxVetMKheQFgGL93MpX4Bu2AyJoNPdqURSJ2",
  "key3": "4QeqAgCvQAgmNzxg1g4poc3u7QuegtSn9pZrnBHwn7ahW7r148o9jePX4J3DAkdRBkDwtVNxd5R59dmUurJABkxL",
  "key4": "2rEeUCcccJynGYw96deUMjvgJxomQuRLWe8uyxUkJARpz96vJG8Q6y3kUqL97dJQwY2brgQUrxiWkh2n4UbGsfTt",
  "key5": "3LZVKUieXn4nbvBXFRiqYtjQ8JnmgyFmd3AyR2U6exqD2xzoXn2kN43MoX3bVZXTGcFA1Cgk6SKoHCnaSJ8dYsBW",
  "key6": "4Qq7MHW1YZ9Wn8omvLzm85sskzfcsMUNwo9CMLmEHCzbtNyyiEe8iZMt2GPqTkntCJcQ386TKZQ2qvXk1n9pmDuP",
  "key7": "4ZoLPjM65EVvFuNQveWCh6B94kMWFzKhKdeSwfWZaoXsvrpWC5MXnUjoPEy3HFgZ4hyGELxTjaougeBF29Ea6Dgy",
  "key8": "d86wLqZGTZVKYqLmr4D2H6ooqj7hcpWK4BuP2J87q9rsKX1aWYnojpDDXiHkQxs1PpQ1U4ho4xy7JDTBt7SQxNA",
  "key9": "5HVihb7FVeGeitYS2joSJRMW7oAiJ6hC9q4FMejJhcXvch8Z5GzpzbqfVNBJb3opCURFNob48wv6kUe5fZwABQG9",
  "key10": "JDVAQrGck8kKNWi6cLzBVDtzm4tQ4wr6XebjZm3hQcaWMw92oSgW6yomhVMku2sUbSFMrvnrVjtNeSHsB6ybEfv",
  "key11": "7znjLNh5LCQXN8gtQsZ4e4peDVEusdDKWraMoyRE4QFrJfuTstCzBQDCsdJdsc6xv7KEGM9WcTRwW6Mv9QZrv2T",
  "key12": "5ia3LtcCRhyMMpqVQyGjoN3yoJpDg9xdCBQn1sCm5Jus4jFWizB6DZjzvwAShMW4jVXXTSMTEGiEbwhLNQiVCsbn",
  "key13": "38NzCsX7KfbZ2uW1hMiPeRELEpY8gQTxEigi61FoZBmQnRCEbGAisNhdcm49zRYgJFfHX4BpgYZLDFLqA9ZxWD6i",
  "key14": "4fgHV6nofsLeuaSH5wNcJLWCVT32r3FDya7v67QU3WWGsUEU2Xairsa2PWbFdMiPVQng21Pco6wqk3ZgLZC8uTLu",
  "key15": "5QvWicpj9cuDGyaMoqTWp9A3ZvJUwkhjz2AAFSMfkV36MSHUMTMmAmKvvLMQS98wRPpu9yuBZbHz9yvoB6f7VNNZ",
  "key16": "4QcGTPSc55nAk3mQcGkjJzncLdgw4D16qsHgArCRiqwZB8VVhDJ4EsVMMkLnU4TzGgXA8iv4Sh3p48tW4Bte44Uu",
  "key17": "oi7DuiUyHiQTxFk9BRi1NP7TLg35XswhpW4w5cpewUFZaqZfhkjWrKkEP1aP8Z1pX7UMDQNGafF42URm3MRNXpp",
  "key18": "zbm2CdBcPCDSQw33ZjiYtXrYqpdehRwSyE2riNtEgt9gaDbonTeCCDKDbE6bgk2XHYyS4feYXCcTEmVQ4XJ4evg",
  "key19": "nWc7UMQjGBG8YjyynknAP2prnS7Mm14Hgm9XVE8SUyVjNPvzBznwxpma2UQCiMW3hjTFuRv8H7EaHRMzfn5sQxk",
  "key20": "RFYv72NJ7F1NLeexkxcdPdkJPdfv2H7jkHyM5sNvqmJVe5oL53T3jZnwxvbtNjbBQu3ZUxJVwz7L5RimX7b2akt",
  "key21": "3cjCKaphweqhwMurPnE6CZEeUbb1tqP6a5i2aKDbdn8ceofQi2sUacNER8PYbxjGjRP5c61VKV3bh9kovKAc5tbg",
  "key22": "4GZNLqzJLYPeSsHShbQBZ5kyDMUrtwxbHxNHJeCx3z7ENpFtW9hHi2ZWE19iPaSXUyvNPa8yLQHxC7u4VoJ7V26y",
  "key23": "QDVz7xbtuRonhmneGqSa48KyyaK4En1tY6hC9LCvzr4p4d4dwy2EVqcALX9nDreJRx4JZeXFaYwwgmPnnXg1qDb",
  "key24": "3arnHQXQWbHq1tQ1PwF8FHbvajhcZjF3w66MfGqivKXLog2bKiMoEdXmoBLC3ZkQRFzPYaPsDpZRXPn8NLzNvqnz",
  "key25": "2tLb4SpqD44ziNWPHTAAnbcp6mdN967GAHqaggCnmYW9z6p1WWjx57hQh8jBWp88LdK15mg4YzBwQ8FiPFGS8x4T",
  "key26": "5DT1hAH7WfY1L3WjSGPVuikNGY3xaE78wa9GkTLkePmwfaJei7MQkY45wk5rnXtwEnPuxj3Kh55qxyam1QWwxdA4",
  "key27": "4tUznbW9iRWMDF8vTRBtyHd6Kj7Xd241DYegdL6LrM1J8zkPk97VhbSt1CciE7DMneQb6P6kmYRzRNK57CsaLQmV",
  "key28": "Hu4aWZaEEi2pCkBQEUgh2gkm3PBQ6wuz5jZurWd8zohVunpJJMmpWTqo9RYS68Wp3DUtUeBLnUJ8EFsTtVmLfA7",
  "key29": "5vJ5QabcVj7sS5KJnDMcRNJWsKQ86JATwCZNpNdgHv7RQ7vFLEfydNxFvSjvTQeS77GfvtFvXgZMLH9tYDHuu6NB",
  "key30": "etrwwQUeULgoqGJzWVmpufXUAU8cT1ajSPkygUu3hXuLWDBof2GZFivoKUPnirEDtrEhoPy6cZmS6L5jJovRqPM"
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
