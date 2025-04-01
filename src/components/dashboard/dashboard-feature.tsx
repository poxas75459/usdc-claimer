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
    "3WEtWop7TuR3JWATqFHB8cTkMbh4HsNBPp8xvmc1gukUiw4cHa5PNX6FQVLYjCVHMo4hSPvHswRrUBV7TJA6h6DL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcCLHAFMRoJZpPXdouLcoA67iKx8N1mcW2kRhr5oyBNBLfuVE7ao2exiTiv2GL53rFAaUKgMcdNpCJMZUkENAAX",
  "key1": "4RsaecQws2ZeQ2PtiYdeG3b6vPtVgGMiD7wFZrjJozyfK8G5KK7QkweiP2KSYyNhbDWmbYR6MkZZvNUC6ywSrurw",
  "key2": "39KKRsFn4zZDAcZccXnx3RtpQAHQm52gCNbNH1cnX7WHF9MciYwXCRqoPHZcQeF9wA8MUCTyhsgPpEwqoov39Pne",
  "key3": "2w7vmpb4n4npZWi1dm2pvACDEMuGyNP6zscaGYY3TQ7jWRZCemx63biEoR8ikQci85UyHyheUtrpCykBcgGHKHap",
  "key4": "2EWvps9cuvQdBaZNSpKMfR9vypWN8G7GtmHs5vZNHhSKBNosHebzzcT6BiosBh8tVjEzxFAVs1DFL3uGe448xL6C",
  "key5": "4uKtVtfhjYezFH4bnNFsfCuwxE6K9pLKEgmexphuWz3oPwrTFVuyuyEJR9r5sbJMQUpTHnZ597nGwSsynhPLLw6m",
  "key6": "5hUeDtqomoHdtfxrT4TRhJu8EAy8kdjdmz3LhqbTfNu1zshzyJBS9HH4X92gMKpxtv5ZbCjrLFr1AdgudtNQjRNx",
  "key7": "4AknLkmKhZnEbjFMTr5kL81AVt3Ld7a2Xqeeox4hZMmYANq6zRCjzri9LTV8U6jnD78xyd5mzV6Xqeu8rJyhVDPD",
  "key8": "22yJoP4cdomLq7xXwFzEVNb3EMvW85KsDEMu6bnHw3PohKZ18PhxNQnwQTEusCqgG1E3owf7UepdN1sqRjZG4Tj8",
  "key9": "4SqhpgXBL6kR2gmp5mBJfGeHJQX78LVAWRXC6BfgbqwKFF4QfEB6VtbdHsiqXNFSh27LtVciX9evfEdS67hijWRk",
  "key10": "24gep8bpnxRwpqM7Xgtn8g351qUgBqd35Ra25kokR26HiUxnbvRWCRHsUwbrgSWfXcXdVGwpvtS1GiVerrWxwjtv",
  "key11": "2mztZE581xr4rh7UEMuYupUcdtEHVPKKDNnGobfX9nXkwt5JRUjU621rJ3hAa5bRcvdFFZiUtAHp6oLmarGKk1ii",
  "key12": "3w71SZKzKf5Z6yFHVrrmmoUchieYFer45FtKSM9fYz9Y1gtezZwfhYY2Q7ariKEdRYaXPTkpgKBp4KmhD5Y4K8Xi",
  "key13": "wgQCYRAWk7qCwUJFyK8iJECyqQszDFzekGGcrECECdXQ3GPm4gwQif7ykSGnt9vZRwykiE5hLzn1e8zJ9ci9UiZ",
  "key14": "5zvtgpRiZ4FSynS9KT4o7mQbUWpNEPktE45GQAT7y84Dszkem55sHMrojcdsqsZGtC4zDczDUn88DUgmpz8X3uVc",
  "key15": "5Y7Q1PwGk71kwCQY7xGbQzSHfvvQwYPytw3caPou9YkCS6oFwjSmjpqqGkbEcTQFtrQn3X8BFXpxKAjxvsaPghvj",
  "key16": "ShZCyEoq7vTa3fUtnJq6WowraNz7w5JCBbDuHsdv3WmYVT2kDiiTDEQ9vwDSbuZ1pyJd3uc71zRE3pxsWzLZPRc",
  "key17": "5aSSkj9WGqrzYX3vdpjeXpYmcMsTmNaSBpfb3ekxPV3qM5zt6Pk9qZSavvPcboxjrG1tXkphCat4UfNrEWKN5ueu",
  "key18": "JvD7Cns295m1TQfP44y9MLeHJX5fTRNk4mSrtvGMTur9jDw5geiZd3Z35azuB18HFMpok8EQpHJdZqkc8xgokaJ",
  "key19": "4d883JFSJxPsm8g24pUxdK2DndS1Qp8jFy3QqWSmN49Mk2etvuRaMkdmAWKVEtraVD1xV6RcYeJzcwybKMGuPyaY",
  "key20": "21t5jksHmvoB6md7tyY5iqmDh1o5qVTmhsrYrAYSjEg8818qQqjt1A5mhKjNR9UHKjRpuHNMC5wuxzYD1rZu8aFN",
  "key21": "2RonoMaqnSYxRrA5ubGasZUfTzxMRK1a5CzARcge91yiD6cnUxUNxxfR8BDeX8B6g159uMFCe8xx9ypJtpx3UBsX",
  "key22": "2t5ChSugWbMNXp2UDSo25WxbcMRs2Bttcwc7eumhmdXPdvUYTcpdMGPnqcVoGjdm5yhtYGWDPiRgePAHhaAC5yHM",
  "key23": "4GiTxXFZ6LgQfVSvrCENh56bVQsENT6ACCh3Ag1uuRGnHBtZiBfNdKds1cVnt1iCogmgcESifHyfqCziZ76gTfjg",
  "key24": "5m65xAE3daVpawB3xwFQfWYxkbcVnKhyEZfGAkZ2ScpAd2cHVZMRZ7LrRuRa8kFgtD5b38QxWys25TejQw2WmeHt",
  "key25": "Dt8A3CKeppH2UJBDmox2V6QnggY9CgCUYvPJH3sjJAPrKRyGJdXm4qGJaAEK4Z1NNHCnXMrun6FrtRNsHhXdVNZ",
  "key26": "27nkMEYNxHwWKdno6nMiGRyTmnSYpZ4vK1ifj4F2pQwBwBcr7VTPp98L5iY8ciqcysvK3DxM96o2ewMq2ALmuPQK",
  "key27": "oemkJxvnSsFdiRKYSgXBw3frNZQvAS34kb5no3514d8QrKohKGEBnmHmYKPst6krnCmLkNTCPiYKkZTWPn6c89T",
  "key28": "aoThJxNiKuQfZVq1HRQBf3B3Knw1ByrqiyEjemsgUoyU2x3oQYkVzK71H9MCCDzRfMwViTLyeR6Xk4Jz9gyonMa",
  "key29": "2xMb2vGFz33riiVed51ux2TyNSLo7WtQNHZhrVdpKLEKftUoVekhExkUfuEM8WrvDdhcuZJepYCJ5wyPtFfi6rk6",
  "key30": "3vjvMDcS9DYZVM5t7hrJKSBscm2Une8FsL4aoQbgyC3iMHJJUnCzLLR9uWBL1pcJtGHJjVqMoTzdmF6QraQcUWPx",
  "key31": "2kDkFy4E3ALMjuQJcpLnpjqD4ZWPtCsFL3rr2XeWxDCFEgAvnVgRm3qWbCZYRuN6RBh6SbWfnqtE7zRRiUWxYvLz",
  "key32": "47p8wu7R3dYPwo7dj4EXxV3cgD1fmrhk3q3j2CQeCvFAaCmtUNLYGkhCHH2WCvT7T1N8j1pdSkYotkkjeQKaotno",
  "key33": "5Er7wCVXM4XURFa6FfeSaqMsL7W7yM9piz4VRsmJxx8t6xJ3pzFaGPudLcZknVUp8BTAfR5EucU4b2seqGWFQPBk"
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
