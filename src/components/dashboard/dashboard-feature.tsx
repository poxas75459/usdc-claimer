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
    "4pS6fyyHD2fWMi1qWeDV2ih9fSnH8m3vATTUSC8oBdHdRWmNxnE71bSTxyCnL9mBDrqdVMFoGExYG1fDbXoJF95f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFKCM45Fh8J8B2fVuCndEeyyrCqMVYBHM42mwgxhQqmnxW9XemSd4VRD2es9Z5QXj3upiUkBAiHttVWRFWTLmH7",
  "key1": "fLY3uCdpXjTEaKN7dMpC5fNSzRgAAjsaTSPoc8VrDtv1B95un2ANagSDiDPqh9qG5mM4idW29w1hyadZuYoNyG1",
  "key2": "3WE38f4dDH9yaY3XaAJ6vdTJYBqq3sFnu4LiYS1qpn7qcHo26GkWwnuDyFXdpM3ifjphgi2ofFFLF96NMpX3mnkd",
  "key3": "5Kj5CEoynnEbmCVd7ietntkS2gUJNNCyiHjyjqTQDMos3Beee5xUGibYCToUDpMeqU4VKLCvcjQqaz5oBzD37ha8",
  "key4": "3wjXFCvLU2g2HGs8yLrgEBSktLkz8QYL69Xj71BYu7Gav4BzAz2cac8Zqom4j7HmobevQEgj1zbMf6apvdJSLLkK",
  "key5": "2zqJ7i94zfk1B68gVesywT9CMVFBXKniJWzxi9BDvCPrUTwX6KUTZTfaqxghUU3sJcvFPUHEGM1Ng1AVmKGn3B2p",
  "key6": "63eqXTMGJajVDGzChBnAbf6pBWdciGVmmeSHxDPTmVMJpPzZ3waz5wLwn6M16hLig1USJJ4gDLVRQSk1fHVFfKpa",
  "key7": "3mQLEoWVG84JtLUQ9XtxC8A6jqSy86c3idHw2vhoyzS6h9nSfo1RZCaLDfmziP3HbWMdpNo3f8YxZxhr7dDUFSoZ",
  "key8": "55rEfFsHPoovsQBYM1QbcsZwTG4D42P79fCoSjss1GciBiNFTfKyxsTFvQK2ywNYwwVTYPPc5NQrb832UWxG5xzc",
  "key9": "phnaK4doTvkEbSTW9feWSfXYhVGjkHkCNDNNnxALuR8zzTJHM9SHkjqccWizA1JnUxWWswuTNYqvWVcsMCMPcCH",
  "key10": "3zCBkja9Pv7K9CcxXgKkTXnpBJBBPMgtNGdrxrpWMbeogsTJa3egnwZQf2nWyRadZ6CGwxtBEzU1brrGsXKpgK96",
  "key11": "56jsa2DwpR7WTmS4UPdZjGvWg5j3trK9MGiQjYCcZvDo8JUMjWcEWNog2vHHviRFaTrsfWPTzTAr7tMhG1V5acqk",
  "key12": "3uDyg9KAHaQFCrpnYk7dyf9VXtatNMaPwte2ddg7PuLP7HxVDDDPC6jVeeCGiGuJ7uerse7fQ3GmAAPf27P5MzS5",
  "key13": "3xkY8kWJNtfxBDUdiCZW2Vzk7SyM25EAcDWt7oHzRGekJmuDVfxPKZ8zqFwnap8ELqPHHrKwdnrn8XpXL5KmRJe7",
  "key14": "2EdRMrygCZh1uFjDLBzdh7HQwqas5Gz6o1YVKfUrJj8j9dkW4n6M8ufM17HqD6kp6SCJPAJa54XxKuG8Ct42eym2",
  "key15": "4QZsBCPYzqwWbFN4fckxL5vkZSXK6qw517xYU38zP5suo2m7Zc3Ah4FFmkJZK4TrzhY2G6Ygf2H616uLLmkGNFRk",
  "key16": "5vmnX5T7RdxUaBqoqTYxguraNqjPfZQzaze5LbmUvoicJGa7qM7J8Q77iwT4G2menkWqA2qFhwjAtbkU1j9uFzrh",
  "key17": "4i52Jt8XzdX6gA5kpU4TtnaTFdWTrzPfDB4VKco5Xf2a4nFjVZaC2voeFFQ4bF6haPbsLspDPFxQQHdPxWtUqXPd",
  "key18": "2GhwLdbNdFsrotadsXNoiNofGd9e2oVStusoXDW1rXSYG2RamEuny4AWwxsHV8AKP7yb6hvXYz1T66ZchbEjR6fx",
  "key19": "1jYnVZVdtcbUiE6v6UqAQ1cDbxjFvib6yri3Lu75qTVV1bGskdrrGK4E2Q6c6Atj13k8UJ5R2jAjmDa93fXSozc",
  "key20": "4nmCQUMChGT5iwpJnZEfyBDvQKGii8vHBhvawJsuCof44NPQGPvT5hwE7W5nj5H1vd4Xr54avDPRsWeKdRWLu7t4",
  "key21": "4Q5C696b7cW38Q7r2AJ8jaM5Mj7GQxcpP8PdmnsbYEm2GCKbfSfvyriBHZizqiUZaGyzkept8MBfB91qBUjGNTE6",
  "key22": "1YwPDKRjwxQEKM1vo95vpbT98WU1eHwriGP4wEziADA4dzQbKkTUgmLefHWM5iwr4aQ7m6a84yL6A37S3pyAYcR",
  "key23": "fP9Er4zzyYwgvNTqDShyjPWjMfgFdonbLyrZdMt1Q4c6TUcbdXpZHJsh1MPCdZaHKVHR6NNu5gqB7C8y5Xjepx1",
  "key24": "4tox96QYtpFJHUaJTF2SJL8W7i7f8j8dfRveurWgWi7vhhYM2LTgpbBUn8X4pVSkwPmRenuN5PzqUTcXxSBveyhi",
  "key25": "2WAzAGsz7Z2Yofma2XtCRbWeyKYdeANWva7WEBr9bffZGQABaJW7uFaH2NbcAdgK5RTUuV93jyW9UdKG7yEXoRpt",
  "key26": "2bzNmRFFwpEUtS3w4WL8qQfV3Qyo6JCsHCm5mf3j45BWALyKFGNTjWJQF28wkv9DnPEag6Ns8a6BHsoRvD4rTNfP",
  "key27": "wxdKNAG3DgL6d5Vi5jWFAzF6ZoGVhp6FTc1NKSm49Vt9i9hTiJZgQmbU5DuCBC3YWBYTtFRiwB2qAhjQyicG25R",
  "key28": "2tCUocz2bGdVaGYFK2EMR3oXf29E1yWoee33Nj9RS6bKQvRVLRfzjozZXTEUJBUgiUvCLXhYfLJcQ1r84NEe6yx7",
  "key29": "3fva4BF7zoLKZTQeUhCCbdjDVBxd5ncGmtxefWdcLBDJthzzbFyodKD2UXKC8YGPySy4CcV5xv5rdd84AjvUL9k7"
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
