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
    "2Cm7ChknvYBKrQXScpUri1XhuZAZDETZwifurPtr61G7FrK3SSuPLCJQm8hQtaQZSGGGjbvxrafSjuBfJnvm7e3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xmvR22ALETRmQisbZSR2SEgR8oyTSCVzrANNKcT1ioii5ee24gqiTk6pMi2vepY21vAsmcr5ZajXUiGyX53KM84",
  "key1": "356mWjCvzFfgNUytPhRyDQd6dUz86D76K8QXAPm7i5jisS5pRNQtbdB5bSKBoLyDfJsnPxm5JMJv47G6Hn6mP5Cc",
  "key2": "5GcTQkJngmGQ54SfF9NPEcL4mhQ6uWy3J5aVJqtecCeuFJd3DvnJMJfvrJJPKjr1U6NBj9Uw54jxzEXDcYPFyXsy",
  "key3": "2tKopbGXd2tp6L6NXRfMGjAM83p1MpZcdenDcpZUJTcvpytMJmZvkkkyQuaBAvC49R1WfLmrg9GREJapPeuciTwD",
  "key4": "4ViBCaqdydJTrgviXUyx5okqWTtognqPTz2HXUVnJvvSw89jgXbjyRnDczMPTgBCBx48bqJAQBoUxDEjDaos6T7D",
  "key5": "MwUVbCAdzUCSvZBgciw4j4RKtQsjdDdpb3LyAgjQr6btxnejaWvig1NTXqSyXyTMPBtwM8nre8bXNnL7MJR6KJh",
  "key6": "2KD6mAvJK1mM5eV9WAaHUBj5sgW5k3K7H5DhqBSMy1XoKmUtQjXzbWp8Lvg4AEnN4FytVddNv2U5kTs86JiSTXf9",
  "key7": "3typAk6YJz4F1SejxeNJTN2WjZBm5NwgFYoEJyt6tGE9dLyP2w7VGFNbycNGYX8mdEd99QQyUZJTdBR7Dig2oyv3",
  "key8": "48KtK22Rpk7AQJBozsV4pUhMSyfHWnmuce343S13N2GuhmgRERVaQZo5eTrJYi53RkyZ6sTptfup8QtahYUjPRYX",
  "key9": "2H8bVyXVT51JTDX2RgYxXrJMuLmyXjREFa3QUTB8mndCgWjn8wZaLT4a3NtBFCVrBNnJHK57LdMCtL1B7VtgqoYe",
  "key10": "4T7kPwS8TQZ9sMnPwswe7dCgvpr9u2HGz1Z6BSZsBUXVsaZuecrMDyDcESFgzQTkc8wx3mk5pNEnv4Su22mRhFMA",
  "key11": "5F4V3NkyXPMJ7jwpMJjBgVD4Lpz8jAxRThEqNfTfCEYKG5FCL4pnwyuvWgJRLmLWDEtvp8SgQh1eT9aqXXT6mcUa",
  "key12": "488aXVzewaKKWhmq4YNkUGJrd8mR6dtGzcuercn4HGMZDn26sK4nFqZ84RS3WfxAeESUb71FeEcMt5FA1Aw1B7aJ",
  "key13": "2fTzdkdde9My5eff8nQ8knjcov2SiAAqkHNUaMFAWw7PCLjAhLHTnVo1hhLGCygT8WCq98oz2AP8dLktv98rKQKL",
  "key14": "5pLPBUDfHkM6BML5sZ1GxnUsFfvvFbikqmxj27EhdHdLQYshHbRcuCj2i32hikJWXrxNnSZXR7eYUDPod5Lx5BY1",
  "key15": "4BR7QU4wS6YtXdkFTe2aPW9NbCyHE9z374H8edD8dXD4PzSxnP3SsMCpyNjnWYc7ktpkF17a4FRw4JQH8XLQvpnL",
  "key16": "4BEwe3gDupTZJkkB2ekCkVCivhCKtPH1dcYbfXfrvFcsGVRh6t9XeDkhCD5bUhx8ox7GdjBgtGmG58RLE41viaDJ",
  "key17": "KrADpdZfjUzsWSTDnYDm9oi6TfNRiCiqvGfyQ2gRz3tB1iT1kA4vEYjS7tP8mi8iYHueiFFnehAhwD6hg6rRPFd",
  "key18": "5cMwgFAJ6bSY5bBPgrUaLzsT6EEWUzikM42ysw2DXm2EKPATzh6iot7dPhNseDBAe3WehXwr8z1iTaB9eP3JKud4",
  "key19": "5T5SjoWM75oWcqGdc5cvdVxcGKqARvjfKKAZRWS3DfNdgryDZCxzTru2zad9q2PiP4kFsA1SEeDjNU4n72hoDw1E",
  "key20": "5rauAtBjvnvbUppz5MDpknTMu7bJEHv5eTBVgX1K8sLFhVxgFthPD8SrkXhrAQBRhJiVsrub8Xgczr1cf42QeLZH",
  "key21": "4mSmt2aY1ketiu1HUTWMPif9Wog6xXwUtAd1PMsgxThUeiu3H8XrHS7ixqyVtvbq7Ro3akeH7shXLDMcmfEigYFB",
  "key22": "31HmNhCDeL1EaUVkfPLvytenmV41bQnQtFuDWu2cwV2Psaf2u1XTngJFFgwWr9zddCWK9Cozt6QyxXreofCJZFBz",
  "key23": "2Vh2RrcuYdaXjVnwekqpWdoRQ5ZMCEcu3CBv2mgPzQuxq7yAhK1K1pRRie3gfbUqib4g8Yna6kxbWCeY6Cqxrahz",
  "key24": "4DF29RJcXYaxsV3jSzgEd1rpLNanYCjRbqkvnfD3mRSdHdYYppR1hdxn9HFFVuNX4zfoHSitiTiJEfmS1aqe8nVe",
  "key25": "3MNfjECeNVphkUChPvGpDRvF4Na2WE5LUUsZU9Emf5cPvcERHyczJggFMapbCYCiWuG5daYCN5GymSSSzTmC1Zxx",
  "key26": "223FvT9vnYMkuvzngJDQgu7WTuDMi9PkAXvMPPGTRjeVTDVSNEbUh82FYn72rJzUvvYTq4D7XDpW5tfuckLoiq7X",
  "key27": "FsE57Hhuo8XdidfAHDpv4xgqGKmxVDmKo2KYKNpMmev4m1BfNE6txuVRCyVG47J5T1UcSiSnLuqBa3wvD77JccX",
  "key28": "gibKQELN2kiWH9R8WmEhrkmn77aSQPcD6cGSwAx7a9xSCq9hRi3nU5gvWBrGYiEYsXBD29gP7UxKU7sQ7MwNx1o",
  "key29": "9QjjYMS1suPrfRDHumgARUmJdi1oeTBpG9jkoBPNVjPJFznNMk97wu3ugVVHx6uFDfpur2EiPGCRcrR23k8Nv2Z",
  "key30": "45fKJJgHs4uCQgFxuuRvj72KK5X3BrRrFuMc9Gv74iLt5r4VhHrkr4PUxRK1fev68TAC8wU4euonzaoxfW3Cxopq",
  "key31": "5YWFnTNiQXefo69Vap8S7LGji3cPMLhjN2uApxJbBevBC4sAx3CcMtSGSvwbRXtDxQyMuoojJXPwTUTjHQAjdsae",
  "key32": "5wwvbCjWdMN2eiZb4u3k8qk5n9PntywnQtGYM8NHogJgQrjLj4tU37bZguTDAViNWvXiAzQxVHcuSSVaTMvA9HGn",
  "key33": "2xfonFFHxYP311QdwZhS7tm4j23va1yF8NkCQeF6XpUw1BfwBqUEnf97Q284mB97KhYm9vVFqqefnNVRvfVgkUUF",
  "key34": "4KLhgYgaZBHcNcWMRq7bpapQAMgMrYaZoBovdfWFQLbm4rW2mYYR1iFVMej6wGVB6MWt7qpknyJkG4Q5aJ11scX3",
  "key35": "3LmjLuyALcph34sLugFHjzhDJWeNb7KbnEgWzARWDVbGfCdupmMZZrGqEHpZUNXv2q3KUGHsPzVbFQ8zWbAuYJz4",
  "key36": "5pGJfXptnJ53y6Y35yj4aEr7AnmKmEKLi4onMSrZRHqaUN3Sc34asdXwcb4r3hrX3geZxfbbRKRxGcXR15SQVAb2",
  "key37": "KAunhGsDzAHZt1Mim3WPoUmFAbpDhSsPSBZWaxG4idjWw6Zi3wUo8u5TVWky4Tdk35hbyvJTHATyFc68n3fqPg3",
  "key38": "21EfKeYvkz2X2p4py3ALiCXhHpaQ2NZn8dz7N3tB6vhtRZzfUoR9RgNJV5omPMywRUxmtyvVba7XzW6QXWRY9EN2",
  "key39": "3bFnnNaHhQZhysCsxdm4tvpmxmR35Xp6m3ahf41Y9y5mbP79NAWQVyfJYMKC5XB54vH8UiUpX3zqQ2fknofYABxf",
  "key40": "3L8MQLYfQ8Ygx3eKEWTrb7GqMxJTtycruDYBwxoAh1nBhF8XqHEhpstKwu4c1fnMta1HnpprqjweKoPjq5cMprTN",
  "key41": "4cTkpdyUd74VbDzU8ZtP7K4T4YrHNsPi2PnbjiEXCxAuzyJe3zBNgfRr1LeJSSsa8q3fcZZmcjewCX4zKE4BWDSQ",
  "key42": "629RebX7N9hvVkzuBNQeLRDz1R2LXfy5oSp2Km2ATzZtN7yqSC5H615Qtn5KNe9ehZgfnWMjYtTqrN8p8wbeFdWs"
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
