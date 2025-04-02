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
    "mZFf1EGxZDNJY3c2MnXdmjAeh91XK3pKd6GK7Z6Z4Y6YZLaoJkayVjTR6BnC1dvg78md4qJQsHPayXMsjsoSgEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zf1QihAhAKn9vk2n5QkhujeBjYn1hSWnK5Rpcrh77EBahDQEizzpdoJ48CaYMAk5BUXyczcYE12ZxwYsfrzUTbZ",
  "key1": "3byFLXokgjBZ244rGBKnwV9qmLrQyXNLfvNmo2mr1HHJCr65qQ7ZjCHZCD1FLrpzmGh82AfY675erBtuU2C5DnEf",
  "key2": "5ayWrap9Nd2RnvVmoP2z5YkJRr4usKkP8K8E53RRdGLxvLSNcrf54HmAUBaH6tfrexKWqL4xf8P1PdshR6Yic9WY",
  "key3": "4DvYPFHJKiJc7zzbh1dewynbKvdHy8dwvHrLcE8jKhFfEPR2HiyXyx41Tv58sUcY1JoKiFe5KKrGTENtdw7D7aZZ",
  "key4": "4ypa8BX7T2vxRgQU1ALMtkHGNaZnU4a63DPFNGP83W1MX5yPQF5NxNvfKEdGbtDhieLUeJEb1LgFa8Ft6T4yK3bo",
  "key5": "3Jgri3jtShuYFDfz2m2MvcY1wrbqW3LWKp1TbeuJSxVhk6As6mtK3Hi4Hq9LHDp8MqKvkkK1hkLs6qvpW6NgRuxS",
  "key6": "5r41QMi9nned33TWEfJ9HssHgF86nRiHLUPfEfmwy4cXTjs6FcMLRHcNteZH5bQ9X3B1uPnpCWp1VTRWg1P5wf7t",
  "key7": "3KfpL9ZNnZnNhR3jaT68THUxcyPkHUT2x7ft6TcQFqUDPP3ovUpLdLLeZrMXu3sLo9yip1NdFGjya3tmbSdTj2iu",
  "key8": "2zTw3GyH1aJcy2spFDMnQnsBtDLWZf2X5X9LrAsdFjKstFAjckhTDcP2Ty4npx3FeQ2Wd5un6v8YP1cYpWo6q7PT",
  "key9": "5FzeSFS5V4ut8vwCBjjyHaJjEvjHDq6Dve9N3bPwvx4os1upwP8DHwZce36zBVGoXKfPj47VcUFsP2uCV7QyckuF",
  "key10": "43JjB5ChVVjfvLGfmf9Z3RpCxQuus2GZxYmoZvZvur7zX5vzMVTbaUhJhk8it8RYZvfhfCJdLpa5Lhfj8wajZR6z",
  "key11": "23SHeAgtLFtigx3FRSCiseRbqAJo945LcvHyxSAPMKN1UpBGzkswxgjCE5tBqJ7RdE5AypEAFWdxrNvrwY8R9n3D",
  "key12": "4XrWMh46MTRzbpwhQm4XWDv9GoKwPMRK1ozAsYuuAYuTFBxzJxQxjo3ePBoLpgJtx6oUTJFQ6g3yRA99MVftUQr5",
  "key13": "23iCapdacomjuShSiMYtZydEnLX3kL9KZagjMVFPSumUBuQWtn4nyYuGNLhVSYzpYDKcsb86NWFxhFitrQjappSV",
  "key14": "W4bYstmeWD9UFuZdnpTs1EK6w1z2gkq377hwroucSb6Ps134FJ1JvPCL44KWLhSC1AgZZw46inZfc2PiHVfQcW2",
  "key15": "3MFDse3S7BmLcpxt7eZrGs3vQKDkxU1Vqr3Ht3pCwnHCQ1Rsa3MyF421Li4QUZWeQUs9MhXk2U9t6PD5KsDe5Wo4",
  "key16": "4MUi9TodUHDnLMwiWD9e3RrWiFM9SCPw1V8GV6GnYYGd474ciTGfdCjUAnowb4Hubhu1QZ9iStq6bhgA3Y419fXB",
  "key17": "4vW4aTnTpNod2mgZhJCaQHaCWoQwq5ZzKG2qyuUbWrL6185XyNe6N4FqozEnbZHr4ptaSP964nHADj5S482fvaDW",
  "key18": "5oFAQna5JTq8ZMK6BQ4yXoSegoJ1Z8F3wUyizoxwDkgade3kXGPB3VwwaabhvKwATcuqi733b7RDWsdGCzAg2T8c",
  "key19": "29Vy7DrQw46FiGybYSrDKyitgE4NFiq3x2jGqyxqgdJDpWUCWw7iRRtqCQ3esLVCq5CKzShBYQTS3QZzfaedAWqf",
  "key20": "2dFfasZp7W86TsHmpyBiSu3whJGauVd8pjg1D6PdckKr9RUF3LK7PHFfrPbVfSs1gfpjxP5s7YZ8LEbSZVGBJcXY",
  "key21": "5kK9NJin9Mc3zfSxSWzctt4Qx1EV1xMq8dbhaSAzicZArHP6xZiZHmcvStvrk3CaPGYyyhHF468hNocfAkkNvyYQ",
  "key22": "nnzpQxpEuUaFdCoxP1GfEFwr9jKNQU9CSLWpYWzBXHhAE7E57tNZ5MqzpZueXRRSs1r9QvJtvmcgFhVVVeLttpH",
  "key23": "3TJRJG25QfiqYjtYcXaonf8SyBNocxWUqFLkzBa12hLySJcuCFmwav3ho68DmYWchDofDCgWA52j1QkHYriBrowe",
  "key24": "5HrRHfsmZ7v6TQxS12Fq3YAHTTNvtxNcLBVtHMkUr16vJwNBUeQtaxFTKozTKruGUGn8iLHdG8wNRtQEpLXPLMNe",
  "key25": "5vGyKLYYf4cAoakNe9qEAL4VWjXTbdYnHJjNWjz8Mb6sAm1CfRFJDHtHR4wBJPgefoNmHPxVtm73eENLFNib8Etr",
  "key26": "2hoimmrkw1VpCyy4p4QmHXma8BHtUyVB4ZXpMZaC389aHa3MUPAkJ2mPMZoy3tLQyyHFbWAfQUgFf4nSCvNQCybQ",
  "key27": "5CbV1qU2ymYfz2tqLLdgXQ6BeJVKdZn1JdhP3cW72pV4TGJZpcJPsKWEJgAScZTwvrVjzkaSFo3HAXDxHMdoxoHx",
  "key28": "KbXVxyEepdVVuBiS25YiEjLW4kbn6VbYbfAzfeU3mNNADmUiPaLzCDyFZEFS1iMZR91BKAuUYX4Uc4Jm9MDy4d7",
  "key29": "2CsXFXVWLNzaKn94ya1DrsFQ51aGUwpmzZGe7dqAig4U8ksJKKpyidfaGn6edddGhozoiz8SvP2KRhVBYAuHMMQc",
  "key30": "4aPzFoA9BTBFbnLZaparbtYGPabEN8AXGNysSFS6qp45kPCyeAHe6Bp7jK1FKCVRc65rrh2oi2Li76aKmkQbH8Wb",
  "key31": "4FPyMrPMvNC6sygz5XcdRiFEDdMj4EUMBJNZZKWTpJ7YvZ4ji8bbNsTYhUsC728P7JrwCvHhWwscKNE6HndnyYPR",
  "key32": "2k9TnHUiEeUUNhVJKK2SBSUZcgSYD8RLXycpVRkARNYVpFEPN8gz6krmSK34ZyMrBvKqLztvhZ1Zszwy55mQ1MBi"
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
