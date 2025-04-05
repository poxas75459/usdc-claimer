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
    "24V4d58CvZHZZyZiNQS62ZStTCPRVtnthp56Fgti96X3ovU6tVjJgH2PAsSmPWsfR7UMj3SBgUMjZCRW31zdELYn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hAqc9BSNYwYn5C4qYobc28oPFqymMoqJ8wKgswqQu1hoKYkCcJ377ZPzgj7gfcMbSgx6keJry3XAWnawJiNZkXU",
  "key1": "2HnWMuz86CHBtsNbLrzKaTMhDDFE98k7RoTvAznzNzN5YDetKnzwB8BqWFTaaRG3tQzkwmC4EED9PXwSqvkbD3fU",
  "key2": "649k8mpND5f6UvM55frsstoiF19G4aCp2oZEv5YXqK4yE3AzpqeZN1qY9P9BSmNffM8Dsai1LEYML6MtTNKR65Af",
  "key3": "dkzMUpdPz3RKuARMPvUtpX9mB8BMQLxJ3JfbEpata7vmL2NAik5hSgGHMDNRqSPzUmhoPHi4qw7mVG7VykRv2iQ",
  "key4": "5TzrxRnQyar3UyQSvmwbcmrWvihafbj4tx2v7J3PRfxgkNHaw6aSgv3X6NvEdofiyAUDQsuwbQJzXbCyzDRG3EuU",
  "key5": "2DCuMRsBA1NV5XQVNZv4WTVZtXeCDpPyr3WGb5yeXwoPGoo3E9Jq5aBvs2vudshJE1inCo5S8fMpxYe9SUMx5dVr",
  "key6": "2pT5SawCXdZT3TNzSUjo1uC49uLNRnSfWLFJMVu3vyERd4AKay9D2BXyrYvFcpeBaVDrfTEghrS1NyLHsCqbrmc4",
  "key7": "5sozubDCR4cQw6smfYuQF5AQ9xYGEyxjwvzcCd9i2bQAmU7Y2w97BEEqraoUwRoCzpzJhscoa7BuQ7hwEbXN4qdR",
  "key8": "2fmqcJk6f7q1RhuAMXa7wE4bGmAoRC6KRAsTS4EEZsUc6ssRceedn9GAKYGQaNRyWkfmQSjH9NKb6fuRXukKERAe",
  "key9": "LHv1JT3rW6dT9h7QefZyxkXqmvWb19bCSQBdEfGDaiysdgTLngFuWrwgRakvxLmojGEeXpVC3GNiZT7piwPt65f",
  "key10": "22UVUsmMn1cYKBQWzNNJngvoxWxFAbpBFnTGsmPmegebzg6NWJK9opoPseUvQ89CqcHJRiuFqRxXsSYejTgAQre6",
  "key11": "ZBUvmiMJTsm1QHGRPUkPRR3mxGZMWFP5BauzArdhUn16bBL9hDFyQdF2XTJzpW6NRYGhKStoDdrdVER8S4eQpDp",
  "key12": "4sv9yBup7TgrRAEqHHr2guzGVGk8N3JoYbEm1KYDD6XFoGWC9bf7GEWARkciSCPpEaXXQjooVLdDwdxHSi8BXxY7",
  "key13": "2TczmKsjMGVhpoSbyuW9c6YmoyAfYp7Wb2kfnhGtiL2qFfWm6XnXhyTvznbXbiZQR92gYdmJQtQkQU2FArYWpeRh",
  "key14": "4jLY1fw13rAeyoawxsisD2gbZY8onmaKvYVAkucyuN1VL6gYhyFAY5pnY77yz61B8anxT6YBCry2RyTV1oMaiCjJ",
  "key15": "55AG6gtzoJRDy9SVj6A4grcGrPJac9wXpLHDW51ue2fDYiABozWMh8eHbVeHDoSFTWLUwW2Ja1PMueUYn7YrCsyK",
  "key16": "3Hbmbcvikf4k7GEYYRCLLnUHPs8WypoFrxx6YiuqrdLwBiNnBhzZEvExzzjncbxcYcMxwQ2doyvBcbqRf8X7ULk3",
  "key17": "36YuNkVHmsp1NQHGYPpSgKHfxphcU9uPig2gvvBDFgqfPBXQtu1Hb9esbavgQgtGfHiPw5ePJwkAN4r4wviqSVxH",
  "key18": "3k6w1VHYcvzJvwqTJ7MbMGP1ZGK5vWeTknpXgPASC5hbJXvFUgFLB7jrY1RVVsV33kYagMbXvVHdB87kMjbrdrEA",
  "key19": "3uwftPGhGWwPP2ikua6fB1Ga5XDFFDjEcFEENYMZZTbmhUwV6XcwQwSPnjDtivdXJBcCACB2JVc1TKHZ9uYmm23e",
  "key20": "2esitAdWDyCrd74G2BW1LB8AwoUgqnU2Vs2jHaLzVXoPgSLBwGPJ2gHYuQia84YzqfM6rc6jkPRcUY88ZAsnkshB",
  "key21": "3SCjux2GqFhw9yjTC4GCBjf6bveed1vWYna5AmbkU598sgZe8UyaeqhHfnojifMBv23BCT2Y7ZCVAE6Wzp2bFLK2",
  "key22": "tgPMfFKBRHGGLPH89gZGjCzti37ikvtdtRwhEhA9ToVxJfWA1ycR8mQ8kiuJm4GLv8BJGjziJ6K2UbqiTQ2uhta",
  "key23": "cuZwpJgConzSCM7HmC4KSkhe2dmXnRATd7Q5zyHqigPAkCvcFPSV6zrgGrB6Mo7Qweh366inRBNCt3eqVLfPtBa",
  "key24": "45mBDLSNuW7cQjq4a3n6spzDnbiA1UkiEvjon4zUt4AWBv3dk8iCmNgLBxfhD6av6ckUAADqquQBCVCK5K1Tic8P",
  "key25": "ek2qyAyDzH8KHgg5GVWb1KfDmJ4Sdq8y1spthoqZDqmNAcNv2Knq79yqBPeV1aLqwrRtSnwQZSTCd8o6YioXAHE",
  "key26": "4KZPY2GwuLhpPxRJBu44HHLv8dooMn8JbuDmHp6D9pu7ddD3h3aHEAUEEbFCpd6z8CsXFiW6muHJXyWXw2fLzn27",
  "key27": "4vMbT4X3NAq3Ac12k2wC6BEdvcAm7LoQkQPL2t5nC3jfBWuTKS3bxUckANEG8NMk55K1oy58FPTmybjMq7UqMPsa",
  "key28": "Mza4m2DJd7DVwzZiN9qN5pxpka5nFWLQQ6UZfg2ukJgUvQZ5BagkvKXoUURikXR7SJgodeNxKXizHz5NdyyCuua",
  "key29": "4pGaKRvdodw9bHHKqX4MkoxiHMsCpUWGHN6h57sRA4XDqanjXQw6945ciFkEQvwCoij7RhLh6JpG3GQQRMtVhSNk",
  "key30": "4PCjXvi2EJhqkFRDe2ttAqpJBZh3ekg7DMXt4BbfxGrmAQR5mw3xeLTGR2639yhDjiS5aZ3ka1dj5y3qrwqMeoS6",
  "key31": "4BEpRD9A6YfwpwZdTcFAkpK2b4fGMwYcqZqQvhj9hKdp2D3B4f1FBPspDaUSALaPH6nroWz5KhJV6u1jUiDz7sB5",
  "key32": "yqL4ykDzscYTxtab8HVjke51oGkVJsJcfizJetXomnQAe4ZeZxXvov9T8MNhEB65VUX7jzg9xD53XSvNN3pZQSh",
  "key33": "3Stss9mV3DzPLqkNBaYmC19tFAVXq8DtKH5d1pwCagN6nKrd91DRcri1hshfueh994BHsrkEZsjoKgfcsGKgs9Xc",
  "key34": "zpH9JSFB4LGQFFDCK95M13Qk9ZxvRJ2b17Nxj4KYv4TfYadA9FkRrwe8CfuTGFhZAaFtcwkViVgh3nAjeL1TuwP",
  "key35": "3pb5QBNnLjjJ6yMgXeTcjMsx4dbj2ikPXU5zg3jAX3m7q1Mpgoat75LNP9vDobtd3XKXWY2gYgwyemzBLcSKUZLg",
  "key36": "2oeG12UWGKvXvUcg5ojtLKFVgmR62C4ULCCYSVQuGg6HaDPkV1tpy6fmgEotWxpLaw2uT1JtNEgMT397c3hPu8Uh",
  "key37": "2eKKrj1TQfKFsqqjcrm1Zhb4m5aVBoS9u1YrQCVC2bwSkHDQSH7cKfjxRF2FjQ6y3gvZiB89gkDC2mdEWYkdqirV",
  "key38": "2J4Cc3PfDiKbX87yBskxSPDHmdu2DEwijUvmgqjKo6eKLtNeSBhwF5aeckPcoACf2SmSkj2G5YoYckARXVNmjn6q",
  "key39": "5iv4pgGrQuE5iK7Drd8SvTQsWYpnTgHMGLEkLbhM2AYAihJbhsVp8k9eojssgB5j6F7GRKLHLSULQa5SA2xdYKuA",
  "key40": "4kqNBjurpGjGJXJYFiH9sTwo48bQzAvcX1w17Qb6HkfvDUfsYj38miTYTaEjc3UcennmirrQFRozNn8UR5Sgw8jp"
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
