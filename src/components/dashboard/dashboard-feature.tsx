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
    "57QiXzACiFdfhniPfbiRTu18HZ7pQBTkpNcZmuVTPPSYcT3oeqXwinLWtp8KTGeucQ9sr6qyxrCy4muJWXt3jBAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49GyTAi4U9Kd8dtmHve4vAe27He2JktvSdAdUrBhiLah3j346TG64RHC9DncXyHARS7kYLAe7xZNpkEPafQT1RUU",
  "key1": "5mAzxTyKcHPpX9UgzkGzf88FKQBrsj1iyR5Yha8gzGTaEPqXpggge9stNS1qhWfZ75irq39Joesn15FLC6M5KHRk",
  "key2": "2zFzBvC5rDUVbLSbcz8hctrPH9qfcCKfvW9XPbP5Dws5AEuWX8qZjFt8fTwh6hZVBGaqDe18pYaeUPp8Hv7gkJRS",
  "key3": "jm3d1Jsi4xJszPF41JZm5yb3PddQXHxFVAFfWByz1kYHUNwvtRTaqKeFKxRujdvpeAXoviQSBgMiCy3SpLp7MXw",
  "key4": "5A9ayMnEpXzd5h3tqymRxBoSwrkHwk6tpciWE2aLK7r6tecArFttfsdAxx6Gu9QvWZN6yjRB7YTPAexAmM56aMXF",
  "key5": "3PqTsxgbHP7PzNDmtdeUx4gshHjWX94NTaYMTpnmFN3exjA7rMd56mX8nr65Utkj8zR4Xy6vnWiKXPm68XwTgMM6",
  "key6": "4Eu5FFNU818jCPDPcgqHp2i53NfbicuxSjUtzkcE964HzaS791bHKfvpZN2ukFyZ4smdiBKopRptWD5XfcG2NKK8",
  "key7": "3GLVQf3zQQef48Qo51iGj6n178dQxBbPu8pmLYNFFgqiVztYYPUJiBEBJCToq6cDJ7pweqx4igGrt4kfnjnWz8mb",
  "key8": "3HmjcwrKSWX286dnjJxDxVYNkrEKjqL3BxBk4VW2JzHRqjnPcEoKYz35QGJYnDtzsC1N2qwUgotZyxwghipU8A2P",
  "key9": "4xsmFhyZk62UhW7SFRZvgPctaQszYdLSCPdAdKF2AfgYDiEoiWbubvbMLq6TPG6o89uXApd4v1h2b5TCFrVpA1qJ",
  "key10": "3zZgVLNshehJgpLrV7HiBQtYpDYXx518tWvLCs1tHsnZo1Ncjgxcpnk5vxMjHYz7CB4MEDGm4tLokkfNqP9uxnTe",
  "key11": "6NFf43TrDcxkwpmZ5yN1SwxbquHJu653APvTtb2E7MFCFL7S6upgdS4saWnDumEEu7bX8QQsLnWBAoLWmSPFGiK",
  "key12": "ibcpwhruDQTD2eZVW6RMwrzXsiWkRHuaQ8XUXXka5TKiPj9qoHzzjHkaaWMRAmUfji73z7PcapKZ1CbmFAmeakb",
  "key13": "3m26i9v6nDi8daACA4cavXAPdtu9JBGfHoMhD1ipAJdQaebQ8Gmr8cna9kR6epop7JdFnh49unszutCALHoE8WBZ",
  "key14": "3GCLZbEssZ2pXR73iiUTwYtAbw26XV85xXnBr2Gr9eMnqMXJ2ftFnYPreSNEGaqpu8w2M3SE1bX3J9eq7Cn6F4kZ",
  "key15": "WqoEnHNiUswEg2CNZyv8RAZzuLwTBQBsQon6UNVWqaxpxbfGH66KJXvCmiSAuJHQ89Fk1sXmpafRXtaTMHLgstv",
  "key16": "2VtWW4j9TyozNjPPxUEwiKahVP5vf7ntfU6XjPTDqDmLYA5XWF1X2uRyd1fpARKLcjU8Df4Hx8BVCtWyenAHv6WQ",
  "key17": "4XBrcyV6n2wza1gVXz1XBFWCzLDxZe25VE8PG5vfsg98XRbgzkgHs1ojRRT38EkoNscjmAUwJddnW7aNxhjLVhp5",
  "key18": "3TDp1GaLMgGVeZomsozS42oGhXuu43z8Pcb8zTy1S7wZWW61vdyLgKHpLqYw3NNigMt2P2AHrb56LfVM835doF7t",
  "key19": "5Z51BQyt99s5HnPWoEQWMjQ51axNhG4UXWtM8FBoadVTJVuNndAcVHqSsb5yvy7uYyFkcoitxAGDxzWd8BqfbhNE",
  "key20": "2MQ7SpUuRP9wxEWEkgfCqcTrHgR3ikhP394y1ZPh9geAComFRtoK4yxGDenK2ZDJwqZMW5H8EaqXaAHWjpetzwoT",
  "key21": "4sbjdBL7D3BfvFvtAXgJEBhd2qJiRNDVphg8BGAH8eaneVHfPxn1dnPTaCYahoYns8mKp949XF9EFKvxWn8xQa6x",
  "key22": "EGRwi399nAC6216fCx7d7wquVZ1M2FYq5sgebJa5fPusQ6VmRqJBYCm6eEnTdGSEYBnosrsFNeyEDkzWVAoYzD9",
  "key23": "61k9cpVbfBEvRqor85zKXBhCsWG4Xeu6Tp8nCSJWogPfPuJYgPSTMNg2Xh14sf7mLVeSBe93PZpDJ27pkaKGatJv",
  "key24": "4fTkNYd1CY89pjJ1FrzFTGX1zf2eRyKb4ysAWk4tmK4AER2v9Wyy9fieLwg6jQ8QwwAnoNkYTiE3zZc1gYjqwJcb",
  "key25": "3nMPFCyC6PLwDDMHkaNWfaqizr4vN7zMjGaTA4NKMgjYT1eJyMKRUaQPHfdp7nGtuMAvj75ttbRwvzMa5iowb7qc",
  "key26": "bvag8YEwdWqTTkesUcYbMDYAc6MJwAPJXhymD8CfvMJyYu6Zch6rMDo1pa8uyCDnCxDLMmgeYELci9QgrtCt9dU",
  "key27": "2J1ePrGXfLiKLHeGA92wqCWsZgsZaaLp28Edwc9fJtmud5Q135uRcpo5tcHsqizSWRVa61LV5SQo2TyC8RCJWijq",
  "key28": "64gjXzcU5TZ8ArUZhDKDyNr1nePay2WraokucLedMVSCx3RbGnzYGERJ5ZT8T7GCCuw1NUA4NrLiE2HmvZa9X3eT",
  "key29": "4D6DxiGsemiBHpZLmMmNorYVDBfmwnj8Dc9CbSV4gSKYAbohcde9VmUUQ9s1xCFsreJmVYstvFRmovXywJi39rFz",
  "key30": "PJ5hXyA9LfzfvdpPH7vnDm2eazmJHpNhKy87XxBUNsWFf1JXQVuWaHjEVHAUYKpYKE9YsYYrWjgNyKigRAdSHVs"
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
