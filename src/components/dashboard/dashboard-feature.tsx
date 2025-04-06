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
    "4R3PTdwsvnRXboxGqh76suGBtryDPcxF3HEEH5eLEyyXL2Zadw8jtqbPc2pQaYfdtcAgu1q97rF9x4dw3aMCksK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rx4uQ3dcjvheUWRnJqFWAgsxpSYSrd19GFVrsXcxNcCqxN14uiW2e9z49yv9aviFjakoXnQfj2cC6FCmeTkGty6",
  "key1": "3A9pjULhB8QTMFjKwRiRTExAYs7i3s5pDX7c3Qod7TEGhVrJPbnLfRJL4YezCzbtopxQuNdo41AfuWjt1FHSztNr",
  "key2": "NRcQ3Mb8L5J1H1ZLpvDNAj2JwdDQbZFRjBCR93imLzoYkgeU4J5XhZCVYRSEXwmu11Lpeknvw1iDeZn2Dyt6VhY",
  "key3": "5cb8KJJbUaG5qzq3G5uS4M4tr3JAvdvsx4yxmndmV3UDZofqRXXG9sH9kpJdTwD8gSNUmuGS7BsdWXtjmLFU3CDW",
  "key4": "5EZ5Xbh9WiEip88NR8g97jtm5u6sVgdknBJT3gXzpcoYwM9GvnbZPmptgdsyQzocsm6GLugqRCJUKGgoJDiASLxF",
  "key5": "2xmtFUxhxYKFwGKGHBvoZrzChrzjUyCdisGnCevU7po2gNdZ7Kb3Urpgd7jgCFzRqYWMMffYkdwJRSZ65otSKcSy",
  "key6": "2ubyc8Bcr2qb21KszPo95Fuo4bsbkFzKNEuAmg9kuC6Vx77quT23kP1SuDXsuxY35Q4gtqoBrJk6w8n2pBM5woCv",
  "key7": "2AzYzGcuSzbfvKp4ekgbARyM4jTEfeyEKKSipWxWwUKwSbzg34xSuVB3hurWvCfKyzcJ6nTwnh37Peyyp7SDj1NF",
  "key8": "5AbWUDCmvn3PZXqVYkg64RaCkXCctFHbU4N9Cv6p5c74MnbZB9McYPU1fQ3gZvo9Qmme6XapFVQRmPEd1dtwCH8S",
  "key9": "2wsbhvk3MTeoSgg1jqa2aN3ifrTi66RVuu8E4iUiGfrT7Zsi31C8goFvKFgUFuxkWMryhp9vB6ht68oTnT4RfAKP",
  "key10": "2WYR6G9Q8rMkzuwUMkU1qRxaZAEkiN6HKN7bnoPNxCJvZLAfBr2kx8eY8PzLkjqDsXoitXVNmySstJugvrA6iG5D",
  "key11": "38m9t9GFjgvQWiyE82Cchxd1y9Znnskt66vdcA8DGoyYzS7DGo1UFsXfH6TEhNrkermwjn4XVpNqoW9FfRWiKE2d",
  "key12": "67BUsyeZR7ZUrPv9zbypUiJ4yk7upK98t4mzivLFtR41rJzbR7eXSPRJ7hTyS5PCcAR6BK6xNxFwsWB1jfSRjmwW",
  "key13": "2AJBEYX8EGiK6hsu4BKmvoC3sWG6Y46qrah5Bey76MataVpyBuNzUAoVFcbNePRCjcEEtMbmhwoomWdLUEjHCJan",
  "key14": "3WUEW5acHdZPWv4iXCCQiz2p5Gz8YwF44CEqTLSoy26XrdoLx4ApLkZVnk1Bw4MSYT1CK2wvz2uUSxwcTViGrxUa",
  "key15": "63tJ4AMkqYvL3seXVyQtQMaRi81bAjFPHxaymTjjGFqshrFctDJxMuEGpbv6G7xifbUXPTuF8jRQzQJ3mVm8uS7N",
  "key16": "daqh9E7z4d1DLuz3Cg5tKUeELW11RojVjmCCbGAcNpufrTn6npzSXZCTSTBSqVUbhq7kbeefWdFjH9jdoJmg1PF",
  "key17": "2VpdfVQan41DjKWQvpho25YZYXM5aue8QmSeWXoFRqF4ZwS7sKzwJwkBDF55xVau3whxw37HTZMRLuDApuZRNFTA",
  "key18": "kxZgqmKkH5T6ALrcYDsJ1C6Q5EknEHfjHDNj2YKXFkGZo25oyYVPPx8cjyZwKK4WBkioKQds7fZXWDm4sNts1Ew",
  "key19": "4RLFc5wcGCFNosLDoWzCimSjMkBmJaJEwPfvY2SJwxiEHet5hwHedC2ZKupArdCynk3vGJgKvxunNSJd2opzq6Ah",
  "key20": "4KGuDD7SddTWXSR2SyrhJRdTR65ZfStmQYTM8Ayfp5byponZMbFm5wUoyc9LE2bB6MTL3ry17Sf1h6cbAG6XTegj",
  "key21": "2uxm4FdKFJ7Yx2rUMy6mcZ19GnaVubZGjWynFLNoxHAYR7ohCLaQLWFRCGfDdF5VzGSCyR2vVDGXLkwij7SpK46K",
  "key22": "RtxensUbBReBGRVFQ93ZDXtnrimL4ZF1kwm4y1mPJLvRds17YzZXDoJZzo6d5PPMumo7S2g3uFgibrck4yM5UV1",
  "key23": "2nuGSpwhyny32CfVQFdPNRUGGfjtWmbeMiuh93aEc4at1zzUdNGFRudzVfKeUPNadEVR8mJmsx8ThnZxW4eupmCR",
  "key24": "2Fn4ajvZvcs3et72jGkhnDyLgsGsQYYVA8xJ4vABgvfjsTBNx9xcxvUvxaXbvgnQ4NmC43wgL1Vh5BokHcWMMd3u",
  "key25": "2SkUaMxr9bFjas4WwLbN6Uduw3Dvts7h3N2HQiDFqoo4kAbRgPs2kjGV2ZoeHAS3haW5Femp7JSS8Ln6mdb2SZAJ"
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
