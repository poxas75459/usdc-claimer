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
    "2GeCZDGFpkoVP66idq8zWdXq37u3fmgnSa8mLcQyhQThr74CeyFoUmDt7NJ9GozuWZXL4hV3phnBop4KMVb4Mm4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyWvnEF44xiiA3RSSUTicV2aipSm1zoYCaJWMUWzi2LNfgK9GduHnmamVocsZ4edr69BYtPMcapVdMtJy2WHfDm",
  "key1": "5gi4dXyrifP3nLw7KFSNGCWct21XiVyPNbUj9DUUzermaAYhxoAvwgWo79XvUmmZJCF986RTBTQ7vADf8zQ6uxKd",
  "key2": "5PnM4JYACKH14YWaAB3augXosYvzS4xdGhVrZuuzEucudL9tajKWKZh2jqatHw6b2MfsXKUZZC5x6Rxo6yAJ4eCu",
  "key3": "2tTtm5t2R4ux1DAeUno8ebs2NKq2EyPhQuyACquGswPk6UtZArV6MuNVGnDAJDGH4zu8BroNP9zad4MqvWqU2axe",
  "key4": "vNfepdZwT6FaJBsxgEMwkk8rcqYGgfBpvsDyd2Yync3BdUrGHXiQgSUBDPPCsCHr2CZ153t2bfmrHSoG6MdyrgT",
  "key5": "47hhHPS3X6bjJsh5DuwLAKLyfLNKACch8JJN2DZkdVw1dPUga4tNhEaiHgLdgPCSdia2zxxPoxA1pQs2PjmajZj4",
  "key6": "35F8bFkL183mnxh9csb29Y2wDTTammcxAsN9u2EXPXrt328jt4ECi6J7nTSBRTJP24a4e5Z1RwAHWkYvuEr2kVHW",
  "key7": "3pcWTmPoTVkqMcB6myaSHFwKJcdNA9cHhqrfagAGZaWT6KY3sGrryrEjA6VUD4bfDpki3DF3z9RJqFLkSkjWGM2H",
  "key8": "p1zfJVtJp9hRm2sis7npagURWrPrBTgXYUdHtqhBw658pQ7gKj9kR27FrnGQtbC2gn85GJcdkjk8Msk3Wy8DKMY",
  "key9": "49Z5DzrXfuWw9WcHsW5pEEo3ixyjgXyPLDRXk6zJUUxpJWBcmkkn9JytFv9m8BG7PZvwH4pU1GS5QD9hbBdqVyoz",
  "key10": "3a9uGdFYbepksKfRMiSw2q5yTqBamE7dXPi7mQfPcwnRVTEKeH1sCPqsYjryE23h5vRVbb187HGGrSTA3rWFiVWv",
  "key11": "5KFKxiRczauFXGx283ZNhhYPRbtp8VFWXUvFkLohkt337St7cHswC6jY3Br6VYcyVHjsjFitTBqtsKyRYKTWYwkX",
  "key12": "2pjyUwWqVRmWoWJ6n2fnjRqXsCMDz4EdNpmgKghM5SYspvngDZg8aLgvr3TJcJagK1Yd1o98K3wtJ33A3GFSXqbB",
  "key13": "37vSGupVRNC1PzGcGsv3nKfz4GiXiY11qH3RBf9NM2LDXPtdgsMEhNDLyiYEbbqwkGezRgDGdCQec7cw6xihQGnM",
  "key14": "5o3Dc9Ek7EUZL2DrzKi15zfQ1mtH6SQ2SdMeWSsfmHB9TXNR8NtEMutPAtCSiQpfqGEQWyd9n9DkfKJ7jRNyBbki",
  "key15": "2V11QVp2nXzXDUTJEBmBtT98LWP2dYKpAQKLCWn8Za6fYWLvSpzoeXGUmSse6vDRBxPoWPJo23vxD5zrjC2aEMhV",
  "key16": "5SBaam9oUaKvzjTuZQhHYY6cX86MaeaJHiCtJRiqB8C5wyNLUNHnkTtQ5ByZZmPrKZHP1sAwiLw4ESS8BS5MBV9B",
  "key17": "592RMN45bptTjFEibmWmMdhtNGbuDXKXMdGvUP3PA3cBUcaKazxZ8U5GMZfuyRiceProcxkf9WFPqKKa62rdHyVA",
  "key18": "gLZ8UtAy4rjxV8BGzFyY4BAig3GR4qdfEsmPPkWxj7TMDhSzC6A4WKFeaQqQ9WS4orhNL4BpRRHDqZxpBF2NbaW",
  "key19": "5UsDDjv3JcXao7jPtqnCQhyP6zXX16Qg2KuWcMB5bxY3GTmTtGJm4jjfM6S8sZjoAfcooQKsZx27g4t6FL5rgW6b",
  "key20": "67FCnBJujArnYN5pBmKkTZRpygBDpzc7BG6mb1UbmPkQea5bqjuaVKp1yxcXxDGj5TAT2PWYQMbXBFhZMgi8H8XE",
  "key21": "4FXvJQgWCQ4qA2AsUJaJMYPRoAmnsnKbovizyCnnbXcghmSoYEXyCzeeiwkh8fZf7zoMh1Gg5AnshGJgWxEatQiD",
  "key22": "2cKsEby3Qda5JfBPgZmQM4rTuPpBxWbugKk4qXR5VW1bJbCt2YZt7TUujFt4xUCNQ2eHhkZ54i9j6rgQubLDyL6W",
  "key23": "5Gj5mFp1tRsyoWfGuAZ9sJWudK1p1Z3XEJfNftd1UxSHiPr9zTgqeEPz5W2bBfjtVQRJV7NgCPSbmBCs3P9PeFrq",
  "key24": "2aztiANYLUM6YFxcZTgZbnQggdDRxwZHrvt1JQb734Jm53EUq8US8cr1ozNTSTRQrQVVoKQMk2q8zYw5GuypoSEM",
  "key25": "4YdweyrrsrbB8ouMyuEeT9iGs35DSicXDCZWyed9d5J96uF9AC2HoqZiC7kshvWNV4Jqn19LSTkCPfw9qVpwF8FA",
  "key26": "33rxZTMkVsCw1QBNoWXESPEPnsKNogf7eSFBRBA7C5TTwjT5WU97D9cNsy2fgejtM1TTCqwA8cTRVPjYNjPSYK8F",
  "key27": "5coc31qT2d6F8Pjrfm3xJeHMo41FnzACoXqMAtgXtEPuLHfMuqhXQhYYRJeQBvQH6SzsT86oaACGwbecnTGaADFu",
  "key28": "26ckXxFqywhTSzM9BMv1bjnJaZqd4W1mcNxk6Z7qm8yEHGvfpCDkqBStXA9GAmuJ4kuKBxvqU1dz3jjC3YyZjVmT",
  "key29": "ToPq3rLRFoLJu4kf4q6URHTJAptbyWwvQHdcPjc1WfAr71ZytvWQbVoYt1eb8Dx4g9zpmaHoHTzk2AjBaN3JFzu",
  "key30": "4AZf6YnRyZzGYYrRFbSPDPqqjzEVpqydiHA3yZmguHjhSMCLkrjw1s72XxQL6b2NV8s48FUPH1kWJXuxTiYuR5xt",
  "key31": "31DQBsMwf3mWfK9vg6y2FBx8Gh1i6YZJtzZG3wGT6XrXMeFCCqtrgQR53ZSfNZRTSR7HRVMtLst69K8S1LvXQZiV"
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
