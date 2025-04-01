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
    "5cdEbNrNZmQ45uUPTETLhWg1M62f7otWRBu3rwKMXdTe6sJ8Wng96tyfmbxbhkUq3Skm9u1uCqb1BQ9zKa6yDdFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b94edkzRuLApTr4jNLMhHQEtTeBbX6n7rsND4j881h1MEV9pJwgAA1LN9StUzBcCF4AyPCY17qPMaJ8dnueog8z",
  "key1": "3BD2KwAoPFZayHUP5AqN1veNBpgd9kRvhP2ZMzyb2XENHcNxVrfzE7mVmWPwCwu5YLhDKb2YBMadFixCg7yBpk2",
  "key2": "s8zEHPXvtKen3YAPdMtU7UgqL4ii4eEWW8E26c4z4d7RkGVS773BhtMfvNHfEPDAWjzknqxky7m3TRt8rvkjUVq",
  "key3": "4THirHAGfRjAqAmvS1R7uB79HJSyijpfbz81ecf3ELkP9SGhb1TFayJoAguHibqjG5b6LGV5s3RxBKUbUZdrY2u6",
  "key4": "316Xn94af9LTsbTZk4QJ6DeEsuNbYFBP2JC2JoMLsSt9yGXi3dHq6kMdcBeU1g3eGEfWGVpsddE6byP1vdeuR96z",
  "key5": "2wT2ESCxKCQXqqCXYSXyrWMCnwzrYRG22rs2WMGnD5Td9utgi6zZuXFiyfdN1bF8pbL1g1SFPozXuwqWkxtHKQm6",
  "key6": "3X7vd17rRm5PAsAuaKEVixRqt3mGkEtBZeqBtbknFkBypC2puJ4d5PKZzxWo3yBHPFhLQMLfBYzUkE6ReNBymLXt",
  "key7": "2bzhpXo5zzmd8MBF3QELzXjtNZcGkay3nB7k5D8nPxXBhfJ4weXUzGVALEtb1xuJnbrHezNKxUjEmL8ypTaFX18Y",
  "key8": "3ReJ7Fwb8AJ32PJt24GGWCqkSWE98Zha2e1QNLTMWgNA2h7bF7poQF1ejpw9zKEwDczzycDkGQj7Gv7QSUZ5mXpw",
  "key9": "4iubQ1oBRJR1VSWxAYqa2uipU5r4ex9es3mrzX8MVjcFH2ZcgXPBkY1S8vEqQTTE97TKdAzFPp8jXqMWTu4pUfPt",
  "key10": "5ZsSVmhHNwthLL5Qk9TjT39QmzFEGAkj5JTh2Faizu3421WGfrxR8eRUXwbiuH3Gf9XTELQ5zbJeqaaUGodFXLmh",
  "key11": "661GmG79yz9Rw4EYgXcQHzL5V5zzF48K8s7CtRxoGxh9tB45qYE4vs3xqCy7MauFeqyv9Gu8pxhqFrdRXNZG5TFo",
  "key12": "4LcoDu7u4eevkJWSusNm24kQSiXFxucbAbXFM5nBb5HyEFj63VENHHkU5EArbcLEjpwAVGDySm25oPW2QM4z4cvf",
  "key13": "cS9gVgVJ8RHRoTDwpKDyrse8XpjxAZ31BJRvVFBe3pqcdkwLZ2xzH4NMGML7o3eU35zo1U1X5Nhve6GFeXrSCSA",
  "key14": "39L7gQMonW2UD9VfyAcMdhLHvsi4BBdFfjDhDHSSd5qMtn2QuswR6C9ysCk8bzK9gCarkN8vb27HD6zz3WjmBbZa",
  "key15": "57KbBkPYMNbunbYGEjHe2dAerhdP8dFeyTmHndcpudUkeqtTnQr4x3kNVWa4LVbmsFuqCAsMFkQRrrgLLJte4xXu",
  "key16": "5MWSYccbeS4Aofy5vH9gDNYooSucnQ2Pq2TLkBTwajT1aGVgBBiQzng2B872GJhUuA2P7LixBWxGozVT7t1ovduG",
  "key17": "31uNtMhPvxSnmbh8sU9ajrkJEmXsPQYoJLhHRjVoHsgSEtru93XAZN3FWKj55zBaXY254bycXQAghamdPv8eFaRV",
  "key18": "4NyRA8mcNEG1C1WCaBNoy2pwjipjS6crzpqj3kuBQgfXHUr1gmN4GWEZvTFKSvTr7i75354KDJ5DuKggtKcjiG29",
  "key19": "3erFr9WkqRUMiyZMu8wbbJZS1eoiXf1Z61DDj1HFXHg7j2yvWtMvZUqoaHrmh7wLFR3yP9B7HExhjs7HjtDGLKPX",
  "key20": "4pCKQhos1p2eF9iZP16m263xDGnPb4khokV2CUVoU5sVojNPHrSH79mgSBGwVBYd9kwtmyHkcokn98rLJxLHn5cL",
  "key21": "fjxkDmr1BDDJx9pn7MPc2rNNXV4WEo6ZS1Hqx2ehqhdSsJ6WjcVccoEGFEhbPiMfr7ArxpMgf9YZHSwQqWZWuRn",
  "key22": "4YtdESQqey3kp2VviwWhmyPpSwmxfCzC4dVonXZJjyEVByW1k9TLBVsbB5ggaVUNNfoyUmbYE2txothRGUZeZsFp",
  "key23": "BLZCDweHvPLWd458KmRAL75FULTob64A8n4yzy6snX3MYVAPEHkX6P28GRpAV6GNUWubUQJeNQUj1TN3ZJi56NT",
  "key24": "5yf6UzMbb8wuXKGvvoUsk9LBrHrwxpRpEQ5iUgZLvyTtnvQZWS2E2DVp1EG1W5fpzafjN67HkwBfzEmfSW1aKPDV",
  "key25": "21R39F6cCDr2RbsqYmxeYw9yETivxDM9GdoRpEidX2gsJUmECqfFxUEoc4aYBgw8VfJqfqCMKutGhKCiX9XajPSk",
  "key26": "3xxWPfrB1wQ8QPuMR7awpKYRLwU7Ag2oKVpgpCC3AjKxgRPtKjN4FmyVWHJei8R5C3xMDad4tZjJ9TszaD1VHcfC",
  "key27": "2tAhx4BK514aohy6amC3BtdExpGy6yg11ggU97nu5SPW24tXSnYaQKbTzf8yyfcUBn65VtJYk9TQTNrwntkp9ge7",
  "key28": "bs8ZsMSQyxbNm5zZQjZnp6bsKaRrRJ2gAeTAkgSmvtU8mb17UnDBeeeSfMkata1S7J76oMcPe1zQeKDppp7kxzL",
  "key29": "v1UhPn8wjkZkbiL64BxspBxJAgFbKHxFHA6muwJwDXrWnE13yHfzjFXGyT7iSkhwtWmprm6MhrFQASK5SKbtkzh",
  "key30": "3aLnd2Hzf2FpKoGymEy8qA9VyuHsKygCrrSpvJsoRFmU8zBG9LY3UiV9sP8j8osLo2csSRQT1T5ascjRfn7ta7Pc",
  "key31": "5vatvGqamfNx8aH6hoY1g5yzwP683iMkvjudG9mT3dShQfc4oYrabm5TxFyfEvF1tkkdvVisTQNWskf3jq2FNkfG"
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
