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
    "3qeUnAuEcQ7ZU9TikQekuUcfsYYBMNddRr6MVxQanBRi4hhb9jwqaXyYHXTF78MoSf3VaEMhAmFvsTN7A1t51sUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CsgTVoujyUYTtpUBeP7GPqazVHKfw4aUNj6CyiNw1Z2KKfMSakKd71fEy27nsKmzzVxYxfzqoL7Qr2a3H1nF4aq",
  "key1": "vqUi3GNRLjFkndQnnmgPooZL8vFkviE4t4uveVJuQkrCZshsu3BompEaZpZrb7JQCwqp8x8bfEzwKjbVDP2Fy21",
  "key2": "2rFoVX5HGnMD8rSKKeoDeBfqgXCV3hJvBpj7TRYiPWJC1z2mXzrr5yGQD4HL8igPMRfL1XZW8WPLeCw1UoWwDsWB",
  "key3": "4eVNTvXqKHBZychRvGB81F3EyXCsz654s59uvzwtcSxnczqM4TMbU75Cht9LMoF3hHTfymuid6DuM82RzNSycst2",
  "key4": "4Mi6amsXCT8oKd5f1W638uqLo3JX9gCkxdTJKtu8TjvKqqpZbFqWGXPXDsivxCKmwUYwg8uUEBsMxpLLRijxqeH3",
  "key5": "5KfHNJYjR9W6Pv9QaTfB7txuMGPvGP8prTZJWyVhYkEr6E8WJ77QiivatBX4fatNuXUMaLJAUMSJZxF3V5uvYxcv",
  "key6": "5CmHuDR1CAT7hvbJdenzhh35AenpHP8MjimSAHev11gSmN6Ni3otQ3g3yZy8dQ9n7h5SxRBy6AMr9nUFT7E7Mg2N",
  "key7": "2MNS7gymzVvexsozDBwhLeBFEZu9g91NyjGxS2P1gjPmRfvDJCtzQ7n3jj4fdGD7guBSAqcci8Mafwzkc8jHaN2D",
  "key8": "jaivRatK2yQBCSzCKaz87rCx9y8R3hs2KGK6iPq78hFopyRfPDiKoCm7zzmAzRDVQLyLTMwyvJDNJP8dGdXuhJa",
  "key9": "29DHNRUoJfreWcYPrNqHecRVtiSUTyGvhTHohjks7yStTbUaZ3uLoBsujLkFWHX1wMNomf8Zu8qbFUUMwiEz71Ve",
  "key10": "3kWy4rpJaUhNJhFwYghGACkCiDmc4maP4eBzkqTeZYUbvfPadXzntzXzEQdeyXJAH7CmTBxtzMY7NtxyQJzAxkK5",
  "key11": "GpSxNNNtxxLygpYrLfh5otEEEZ1XZZvpWReNr4UHQaXekhVpES3tmqd433wDSnSBC4uc2BU3PWWpPKqxhz4KobL",
  "key12": "627TkvbSmFjDsYAKdiWtp9WPrL8pgjT2GnJfaT1KBpYH8FsvD658YiyKncERqrcpPDs72T8BueqvP6bUudqJFKXF",
  "key13": "LAHyxwo1oQdx3ynAxDryKnsBi8qjzdmWEYL63a3Ntbz46dKVger51voqUVa44a8eKhLL6p9QGhL1S42wR4FPyU8",
  "key14": "TGKgyBJyFTq5soqqsxSkpkjSY6w91UfaqkFacgwVzpEpsdbvZTNjQtaYkRKLadZnbLCccjVYxYh2HcPLY2MGcdf",
  "key15": "2FQrfnV22y2kP4Q5cezcKYkJxeRdqZuEvJqvVVL5FcE9pdoS71MZNuvw2gLGHseaDFHQvLcrxKo7N8CZqzfaCVT1",
  "key16": "4RQJZAo9RywjiqCLeDq6QTVBe6YgW3pAiJJZWYYyiSKrEoeMDssXozByd7yCzPwTCHoxmYTujmygdoPbaz8tesQU",
  "key17": "2yVt5Zdpy4pBLXVn5jB6JtG9zNmemV75SHut6ts5qredWsaLJ2R8tiapQWRxTe7dDEVsAWsYVTodbwExSQnv7swh",
  "key18": "92bvzqMyVYYdB7fRaFfozW76spXF8JAhske5kPAGeydyy5MGxQJUBM6btGDYcu2WhqCPn2cUTFfaxYUKvz2vgL7",
  "key19": "57uRqatm94TEcujKVtYugKDY6uLdMckMAhMapcYqZy61eMrMYuRzj9x2ZmXNRBBjDqX6HW6fczn3Qw2uuTYY99ep",
  "key20": "2gxp6gvL5NgHeYwXEU3oFSmbcxZJbUgsjNLocP7TUX7z8qHw6YeKxyjokiSro798M3LSMZd45FiL2h4AkP8w7hmh",
  "key21": "jgSQhasuqhYYUrg9LL1MdcGdL1op7x2V8q41LXhsmnPg46q9gdLZnzd11jcdRxc5hb8uxfL3VpTAkJiy28Yuufi",
  "key22": "2FNsZGdZvQUb2ZS2Y3iNBSx4pF5dqQ9x6LboRabgNeaXcj5vk5smX7SGcAzJAWZmRz455oGHMsJNo74Jzi98xPi8",
  "key23": "2G1hsjth31BARFR9CdUnoRJVrRmKrNdX2kSUikBuQt5BvedBQFzWATNn9PMbEQVJpybyxcej3vSvZa16D2n2AdmG",
  "key24": "3bDdrQ17nhPsZmpmH5oxPPh7YoSLhVv3xbSoDtfygoJgheWCH4BBQ4Etd3uERZdFGnPHHbe9q6H7izz85t17Jxg2",
  "key25": "x44eUVjhTpv69wxtkNmcddB2KKinNLBKTF6Ju3PnwPkbaJWCTEGuc8k6GZXi5aASpUDQX7bHmfE8SwzMtT6BwAJ",
  "key26": "bCPrDKqodjMr9cHV1q7Ru2CtAuXqGSBicVpkXAnSY5sG1ZaAuGBtRiqZChm8L4Yqqt3HC1sMGLxDS8XpYzhtymp",
  "key27": "5Px1HwjgygR5XtrSGC1td14LxpntQWQR9bH6nSKreQEKf6FaS1s4HZQ7hxg67hrG3LHBUwaCShWRgpToxLRgh5FU",
  "key28": "4yKJFju5Dy4rrNDivzmVcg9pj1NzpZn9pfi6WVQWuCCiFkp1sPt7giyBEaZ4buiquYX2W1pJQ5twbu4JLUEgfPKg"
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
