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
    "bPbPTXhymUDkiJJ1UV33Amt87KWXnTrmBbx4HVKySxpgRYY94n9L75rJ8WtCpBNk7s3YYrJ7E1PAdpokPtgcEB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWZetW23UdFa8xLvaKesVLjhr7h8c1BSzCKhwNACnMaazbWUvsMBtykJeQJNSRP1Jhigz3Eyr83PciGMjhzzAGn",
  "key1": "5KKV2rbBNSiui34kj2EUAaiXhpu9AmURTEms9u1JRfQBoE9pUUPTgbgZKKX8QzBBGpAVpaHHa7b6KRaL71FmMRCh",
  "key2": "6JSjtFmWyxPcRsjBTNFAXccQcA874BY6fiXecrkygEQAi9SPgWR9ppKjrBSLCB2RSvzPTif2CepybWHofDqoxGo",
  "key3": "5araM4M8esU4YAmgwj3YUMS5eyWzB1Ns6hgBbd8TR7BhkTb67BfEJUTyVQBuMiw33LrHgjsTaRo4iWmqFyWxCJVR",
  "key4": "2WpnW4ymvpA5avD3hhcRMEMZojQ48tZssKiGePekpA3BWxLh8wMUpVqzES8ectQmxsMK3tj58rXTEDFy4HS5Guao",
  "key5": "2zU25g17L8pU9yLjKd7sY4GHHkP6QmXfNrwLK1giyTSHvt3bXWEAic3rvbDhDuvaiqvbRxKaJXUXhvYyhAqyYp4f",
  "key6": "FDiP79rdXmXMNepyzD6WsZsLjBTrK58WDYD1SipKQ3EozoV5CGwfeqopEV7b4umghQzUe2zNSxcvTvFjB3eyNTL",
  "key7": "7Uzra1M4BV8KwmssMdPRv1PknQxhGftaLMFkioHZg7wnsMMJjc3iq6pEyUmZgsUsaBWR5Eto8dA7DE9K7EwZNe5",
  "key8": "3rFFHunR7e1rADcXPgspirQLTas9AUtZ5rBR31CfuAKE7X8XsjLiUyn5FQQfCRURnUUTmib3pbt2YFAWPrG2ht3Q",
  "key9": "5AkbjeVH6ma7p41TsAPPLPQtBe3TBmPc5uRmB8uXcYCduPBztXYA7RrkwBnAreQ5J1UmEny4eMo8TatnM2h7FHao",
  "key10": "2jzBsxyX95tXUndpoQFZkCdx6UkjAdjKruCAkF3ye6VrMpo5YboL9PsyVabusePB5B1XDt2XVGXemcZwTYVvmY6t",
  "key11": "5TCmyHNwFhTrsYDErDh1Jk87UuPw5QefEcSXJMoohnGyzHbb6Yu2K9g3BtHwNZFzoj3sE6FPYuhpojagWrf5xzP1",
  "key12": "5yJdzSqFVSjq1UArPAvJZ21q5J55JjvNTnU2XfptXmYrPy4yLc1vsj1i76jP1X6D9dBbQs2VHJShw5xCqraHFTdQ",
  "key13": "zA3CAZiRVHP5UM5xnmxVrxCtgGvmWE9pmqdGkmTRwNuJY5pCzDEbmYJcYTHH38gJSkp3a2HdDVnpkxXDoAWCTKi",
  "key14": "5MWaEXT8rK5JYwUaNMVHE1mhCAgND9XpPTRgWE9mPJjkrAsKB3GjDnFaPxpoHaFwk5RwmAciTRmmiVo4pCWZRCnv",
  "key15": "5Ej1PofBJb6YFTQ4Lpt5VcUkH8jMSMtpqhqsL153ZVBxtmTRwN7dDEgPhFsA5evUWeLnnEcqDhVY4dJ6pHACCi3g",
  "key16": "wPJ3w2AQNFHn3SCz6L3oyajsoi97BijiyXNid5N97PyuBvUGcz4wA6xzZpMM58phqYDqyL24pNVhGxvriRL8wXm",
  "key17": "eSSuk7tKhgnKeZvgqeffVPPsJXoRXUP9DYqW4w75WoGty5ibsiDe6AvyU6U9dk1ufD7kP9Ti9BHVp5xMYd6YUM3",
  "key18": "2HncxBi1t633VfieNhQ3r56kvq2XdAkWdMkinzSpYJaNxGXvBCSr4ckGLSDVVJ4ws4PFMcAQU2e44DRwcgwUs539",
  "key19": "2mE9n8uxBHqtjjqte62TQpNNwiWwx2Ds7GmMnU5rEFAnJmHHdQc8mYixtyoF3hkpEE5VfyjpUoEpAG1tZrGfjFLU",
  "key20": "5gUvz8zeVzLWVsREFKX9sENZJWUs1eM6q21YhCGVmLJA9NTX5Js6mv6VS1ZiEuV3G6RxuLkxNqbc6VisRTUpyejV",
  "key21": "2VHhjaZoBeucUVkZmqeZ7T8d6RocgFZXh6cpSAimXjKQvR1TFFASPCGWUTXyifdzaPkLt4d3W7oqEF5oNrShXs9H",
  "key22": "7X7GHTBQ5bWJ4MzyvbxrieDWtNEuRnpBoHtM2og18mPkC2PAsCcpzsRpEKT4f5bBDo8JtetsQbV4zZATFgPa6iY",
  "key23": "2KMhjpnUone76762kenCGktaBjwRJ4D7NzR9qNat3wXGMGCnVpfBupH2ss414WHZa56FrzuGEQi8t69M7nbGYZdt",
  "key24": "2WfnYVnMeoS8qTUHqZz4tbvwqPg1vKZnMLneRypR85xKGQGyJR41qRsfzStXDWxuJbaMowYLS9sceka3sdqMrUbT",
  "key25": "4Y4hqrjHF15QSigZoRhmRCL5wBVmQ3Pf9UVFUgdkSFQENqaXzqYu4p4ZkBaqd186WUQBFGt3Zj75XWuBQQz4E6k1",
  "key26": "5h11FBaz3YXVAMXWvA9239tbBXwd4HMiBSDhw3p52DUkSQDhKY1H6AZjA9cEBVJA42M6FkVfoPMu65vtwrx14Z3n",
  "key27": "46hejNo8wbAJZueLSC648NbueideRS7scyNncNDiVxEwr5YnqbQxYdypCLRWhkSxNa7HpEDPUBpByEvRmAdMMHPw",
  "key28": "4Z8f2dGsMH5PSTDrZQx8Nvx9sRGHNDxQN53Bsc7TNaSMWnaawnzrupW9nZHn6xxx4kzsEpn68z1fz36TdVChvCGp",
  "key29": "5cEN2PwmWjpv3Fn2xt1cTRkYLgHuEbmFSQ6DaBofxHstT8PTmLnYh6nhU2CMMEx5QhnhE5syfryx5jgGKH5vgCz3",
  "key30": "RnjvtEEJZiuGGGCTA17ZnjqzDb426TBnSM6vmRmn4tu3ZAuww3uUVb3TZosfgZeBGDCGA7kt1xKdBMxodmQUHrY",
  "key31": "3VxA2DRePQdzfu1spzR2fhsFJzA4GubQVrDdYzgwavJjsCuzzaz9WMPzeFe121oA4kDZM5cLeYNtMCisVLnHuyGx",
  "key32": "2UFfuxhvToPUtcxwHu6vvU89nPsn8587x3vxYnJ4XYWQiYXXDDX2AxeJf5CgzERhfwbCD5auxP16eFeh9BDkBLEK"
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
