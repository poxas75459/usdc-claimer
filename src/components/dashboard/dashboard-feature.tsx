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
    "Gr1bLDWxNA6zKyCVNQCtucFPmi3j4nm8RLpqoRcyAFcXznKmXZMdEcFbUURJWuPFZFJiDujaw8ENov66qPJsoTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4usvbsaisZZzre95ZmgFP8VRKbyEH7xR6Ka2qsTFXV1yqFjHVFwecP6APxgQmhhX72cQMVPwbGRrkxjN51U947kc",
  "key1": "FshdF2tgkQMJXP5Lsc9nPReMppDuHBH3HvpR6y1KEDxYyPFTm6JEJooUg6tWkJzbkuvEqJRoXys83fr2ecsQuuK",
  "key2": "5ZVQ5PsBWqw2Yb2iSEFXKThRd4mrYYPCD7mcYrEN3s7TV7dN3yJ8RgWv52keRHUUyVkpVeTjWpwgR3MNzak4na2c",
  "key3": "3Gub4nmqPZyNkoZahujepfawPycuZYsfTgbvWKCy6YBCmxADmMcS4HPvGnTaUbjYMTJCraHNQXuXFoR6KYC3Z4XW",
  "key4": "61NwrE2sLSwTRKH4HUyAQgUvF2iyN9LkHUEN9x6utFdrL515fLE3gecAFEYYb686tFnvCydcsj9ThKjDcdfjMTrn",
  "key5": "5VkeTQVTxLR5jRvHU8uvTqMHH74jbiwk5eJJALD931Bx94XdkwU19Xfau3noyHFwtD4spMBqmXXNZaoy7evc34h3",
  "key6": "3yb56Ep1nBS5BrDSPizHc2TjAes8dD6c9K5VgucxTHtAUSUohHd9PkLmJJKNHhBSGTgDBNj4n98sgDtkhxYfKZcK",
  "key7": "3RhTTwhALemYfHEtrHYtdWyaF7wjJSWhNutyQnEBp1rjg7aNPu4hMpK8JPzESJ19hyFSjPbnUbAhg7Z8qgDgrPqU",
  "key8": "2F9bcH7aBYRCG8N58RtdWGgnYh5nuBwkFtCSjfGrYpWXDPhhMJAX3anSTKhB1ShNGZLxZB3EQMp1WP6yg9BwBvxA",
  "key9": "iJ713jtX34SaLQ7d7vrHyaCrsgLMQ73kM4is87YfvNu281hXxia5moMrJE7UCWfTnrMiMG83YQRSzqyZCsjrRqW",
  "key10": "2EfmWmqE9sVKRtCwqx5qZiXECjVrmmCWETYwLnjieE99x4Et1WGkqHEANVSzF4FJZNE3LkteV1fLnQWmCW5a2nri",
  "key11": "4T2raTxQAfQA3tXhXNGRwWbfM9qj3Cuqm93zENZ9qPgQrfrxQXCd3btrfcMquGMTVSKu8v3an3d937FUUG2UMjVH",
  "key12": "2h3kexKpFpaNaePckq6yeduYVvHHBzMZ1Z5WSthM7AyCRHLavhVCYKKTXAGRdgbbYc2J6p89gvR1xxTFDSuPoMpg",
  "key13": "4Ewts23YR8iz933cjBXZLui9gDpkTC15ibKDNEZfnsezKPE9JsdrYxieMZ4azdeiTzoU787SFABZMe4hCF7mK91b",
  "key14": "3Rf7qjs8WXM4K1Vkh3mG43i6LDmZQALG4NaGz1LwjJXEwX23a6qLEHpDLQX1SyPxxHgoCt5P5UPSCWpFcgiJWPB4",
  "key15": "5oJxCggGCD6tYZaA9sUCnEhuUfpDmytDuWVGZphMJGNfaMXzkG4F4xmubJp8VCxtwk4EazMFjdC3vAGJbBC411JR",
  "key16": "pKHSmY9xyzCNQpBsghKHs5uQXbrmPPCXhds2W8GSeYNwQhiXzjgMMBHgZgcqXseFJTQ43iZEhL9DGA2AKLMXnnH",
  "key17": "4j6LX7jsBPDuf2MCQtsHMdnd5v227cdrZPTUWSwaN4Xcguhf8p2NfiyMhSMmJJ8MstmYpMb7ZCQpZyyQeUFwQdEy",
  "key18": "3P223vAVC2rUWwmLVaybBxPwrdktoXSJMbEd4eBzxmoGN44PodyUUrbygdhVB2J2GWYpmmtR3zwUbf7FUMnPd31o",
  "key19": "syF49vpugJmmvDxHKpwEkQVw6sjDKmQV9JUDS7fKGeinbdkXzsDFTdXy2mXvMP3ZvFKVrfuk1Q9y1YrUYQ3cXgM",
  "key20": "QxEZm5nu6rS6xw69s9VWxjkuApRe8AGr6kiqNZPMeJizTE1ETjEmf5WPZWj146qLXSUdhgEB5nd75Fsi5rihtpY",
  "key21": "2ACxySTaTLfkPeVKEt6DdGPwuHJvzBh8SVLjaSsTpwS8SVnDnWQornAp8wXoA744BaXstV9o16dRcTUC6B54LHS5",
  "key22": "5rTYGQxk2FTPYivauAK8GqKQ7S4YNekvguKHYmNpbCcYZEeFGKjzJ6ARJNBXeQRBzZKit1uywLE1Q3nnAVAiUd93",
  "key23": "1jospQjWz7MAo9P8RbQvRMtmF7yTKMxZNbAvtCq75YK6BnVwgPc8yqNkg3VXCP1ENntnVcjJa92hmsyCGCyQG7B",
  "key24": "ZwpAzegmXgm4VjxmhrGg3b3uRouj35F1Xz6zSwDZMFVrRFTuL5K89BuwQ3SsL3wEqWbTCM5j14u7zuKbr1ypPRt",
  "key25": "3yP8UdwZUCKFKYbyswfSoUu7qDPqrtS2VhAwup6UkcL8V64aDR1PGemeB633CMhmCyAvNSQywGehVZCRNTw1nuSq"
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
