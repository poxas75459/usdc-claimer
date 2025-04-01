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
    "63oEyH5WU8XnYPt1zjegtNb8b6hC9crC8Em4Usx53YyMj8TSWevXr4MaogaVZDBS5MvFBGVmBcx8gW4TcDPXkPVg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PscLmEL21pYNDVjrcC2zP1qzzFPPNzQoNSFZRBfg3FGKL4Np33fnDwk4xczstoNKETxjdc2uWNyX75HAEUn48PR",
  "key1": "4ajtQbt78JwihxiEB6cpBipsj8ngkjSc8GVof446evVjqTicj9wwvZouFjsmBou6XaVkYZW3cYuWXJZqEtJiXbq8",
  "key2": "2ptHdEQEe4zYHyWeeNRxpZKJcF4DwcyKUQApTPx5EeMF1EsitZTcBDdwNaT6cGt4VcTyB79qd3fpVkzEu5fwfL2F",
  "key3": "5RDVtDFJZEDfFS8ghwjKLw1fpm9UDF4pJjrhNdfC3cZioMGpkmYcbiaKHJM8aNfcrpVvZsnZaFnbsTqNUkmeKaTM",
  "key4": "2ZDzR7eAQh4GUhBdLagmxAyQyAgATXzPV34HPbkBMcC36CHTBfhke7wVoukWzvYzS25XsKg5azxaVc5tKUXknUrM",
  "key5": "5vocJQo1NncXCK4bKE7WaDZi8oK5HTZocYvDg5bvfPUsabYJV1Q1YDvR3E9waQgH3Er6iUsEuzfFtNcdsY8VnJbg",
  "key6": "41WQgKUHcWa5yhQbcv7B75uW79pjSUDfGB1ANBpHyBtpxXGw79HPgfKH7HuvCh7FkddgnTstFJU8WqqY6q7tUdVr",
  "key7": "4TSjd7nF4UMqEzqDvDkVHSaMRvyLLE3TQ24MfCjvoxJFBcwzyVGfdNo1Pp5CrEBLhcVcmHBiVJTcEFQzKVccTTkx",
  "key8": "5yzUuqs5igQTSJzQSZLggT2monLAf9632Zi3JCyC9kdpfgEmS1hs43Ef5ABDbMrSpEfaESRBdATfcTKMjVQWuyXg",
  "key9": "2BjBqtbTVi18KRc4bcYrh6Mx14EagXEoxwCzSnSEsHK4oJTA55qMv6mDGeqo43inJuZrU6hUYGXMRekooYMvxWUn",
  "key10": "4jbWqgNnyAdzA3ctxjiMP4kpc4CZbS85hTonmcZmJ7i6FCz9J31QtUTQsXThQGoVXtGai4hRSdAiT4sm4fWsp4V8",
  "key11": "ci4nsZuYbr8VpQsQfp3Cd8aTsVfZw4NBUBwMDM6HU14CxoerdhooEDrXTDHXpDZvPU9mbvWXJuctHZ5QQU8NXb3",
  "key12": "246CMWsLaJxLwH8zLa13ANyTRTij3pV3uwCBRuNS8NDniSCmKd6nHjiaA4Kabrnyjq61g9Mkn8GKqfzdxFMkRdsw",
  "key13": "4bA2PbJY7vm1Y6M1jySUwj7b3E4so5SDbfhmzS3nWTASHqXBWXi4fxM8Bbwv6Ej5qcKVMhCQ6QcXUTt5jqWUNQgt",
  "key14": "31Y3iXYQshom9bL6pAN7bz8Y5ckyUYPtRLknCkqR1fiosRbbsaqJzBwcr5MyZSZjTfnVyATFCTSJ8jeTK69foyGe",
  "key15": "kDYmWMmuADf3mzoFqtDZUkW68F2RmiHHwQ7xnBPwAVRrDehymXF8eMyXhsPBC9XLtwFD4wqvHh9KYFepb85SWYi",
  "key16": "3WBebJB3JRA65AuedBgd8EM5C6DJTLcycRuMzg4BRPtbq2qM48ToPmHPkbV8npNWhCSqYMmbqAWMTSZLciVjqrRw",
  "key17": "2N8s4mnK11KQLXUzXR9eM73xc1x9ZjbhzDvhLPZHHE1bgYXeaxTtsznFWLzx3Dx5stC3iytPFxicBD6grNKbszux",
  "key18": "2BEuMGaPmGkreU1wvxuV6CZCK2mEcCuEw8yPQPCRwPZh74USgPu3wT1pgpToKuPzehbS71JcCA9o8GVkbQMLaWSV",
  "key19": "u5y1e91HxHrZR6GiHZjKxHRTKSnT5A8q3NPdsW73ZnmrTAL9xPja2FYMM9KGgrXZ8QFn5Crk1yXGgmpkqpxn8To",
  "key20": "33NF7LNqEPssFa4C4CEFVjRftzsVqnd8kuEhksgrd5NAviG8Pm1K1xKb6SG1bzQ6GW5eET8TndEjuoMM5ncoF13y",
  "key21": "2kgnGwKbCsVWZT6Yr5QerWHRLUp4TrabQunMkv8x5ypBJoAXoxb5ax1UPApVndPyjE6jah17jiwpFWVM475rwTrb",
  "key22": "4icUeNoiMpnUjKC36AvrmvwSXAH5YuLXg8ENZNHh8hY3919kqqFhpTSusXKHf4neqaGSFjDncqf4gaXjpvtytFnf",
  "key23": "2QC45mcYbxGYH4t5sWf17YdntEJyf4Y6HQouS5fWnEAKMeqWs3vx8gkqf6abvFtnLLF6ju1nLoc2MZMnUXGNdzC4",
  "key24": "ZshZ2VRSi2L2JVYCcqKejSngwQg5BL1TYA39GU3dUSkdwjGKpDMu6DMEQ1b2HHjvaz2kFTk5XcmvdBVfFu4d1Bw",
  "key25": "4dALkxqkFJfKeyjAsFbDWfBFEZnfLbU7yMYqQAC39hmCiFxsV5Ko7Mi45qDoULiginb272RXPDvzzPmrjeYPKNjh",
  "key26": "2LKB15RkS2vN5h8x7k5gBehL4A9huQE7EdRFQhhGi3Fmpt67d7GgaFJhWhz65s6FThYHQaKWnSwtfaKpsNWmUvbu",
  "key27": "38HzhRANsMY8Z7BR2G33RRyHfJgjN2wfEU552y9FfeLEaAHxAH4EbzNWnN6xZGKUiGm6WWJVhntCh33kDFdZSTJn"
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
